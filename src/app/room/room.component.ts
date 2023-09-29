import { Component, Input, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DEFAULT } from '../pokemon/interfaces/enums/default.enum';
import { PokemonSet } from '../pokemon/interfaces/pokemonSet';
import { PlayerDTO } from './interfaces/dtos/player.dto';
import { RoomDTO } from './interfaces/dtos/room.dto';
import { RoomService } from './room.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {
  constructor(private roomService: RoomService, public router: Router, private route: ActivatedRoute, private ngZone: NgZone, private clipboard: Clipboard, private snackBar: MatSnackBar) {
  }

  @Input() room: RoomDTO;
  player: PlayerDTO;
  finalTeam: Array<PokemonSet> = new Array<PokemonSet>();
  isPlayerOwner: boolean;
  isDraftOver: boolean = false;

  ngOnInit() {
    this.resetRoomAndPlayer();
    this.route.paramMap.subscribe(params => {
      const roomId = params.get('roomId');
      if (roomId) {
        this.roomService.joinRoom(roomId);
        this.roomService.isPlayerOwner(roomId);
      }
    });
    this.subscribeEvents();
  }

  ngOnDestroy() {
    this.unsubscribeEvents();
  }

  startGame(roomId: string) {
    this.roomService.startGame(roomId);
  }

  nextPick(roomId: string, name: string) {

    this.roomService.nextPick(roomId, name);

  }



  subscribeEvents() {

    this.roomService.socket.on("joinRoom", (room: RoomDTO) => {
      const { id, size, players, name, hasStarted, nbrBooster, pkmnPerBooster, boostersLeft } = room;

      const roomDTO: RoomDTO = {
        id: id,
        size: size,
        players: players,
        name: name,
        hasStarted: hasStarted,
        nbrBooster: nbrBooster,
        pkmnPerBooster: pkmnPerBooster,
        boostersLeft: boostersLeft
      };
      this.room = roomDTO;
    });

    this.roomService.socket.on("updateHasPickedStatus", (payload: { players: Partial<PlayerDTO>[], boostersLeft: number; }) => {
      this.room.players = payload.players;
      this.room.boostersLeft = payload.boostersLeft;
    });

    this.roomService.socket.on("nextPick", (player: PlayerDTO) => {
      this.room.hasStarted = true;
      this.ngZone.run(() => {
        const updatedPlayer: PlayerDTO = {
          ...player,
          toChoseFrom: this.deserializePokemonSets(player.toChoseFrom),
          team: this.deserializePokemonSets(player.team)
        };

        this.player = updatedPlayer;
      });
      this.setIsDraftOver();
      if (this.isDraftOver) {
        this.makeDefaultFinalTeam();
      }
    });

    this.roomService.socket.on("error", (error: string) => {
      this.router.navigate([""]);
    });

    this.roomService.socket.on("isPlayerOwner", (isPlayerOwner: boolean) => {
      this.isPlayerOwner = isPlayerOwner;
    });
  }

  unsubscribeEvents() {
    this.roomService.socket.off("joinRoom");
    this.roomService.socket.off("updateHasPickedStatus");
    this.roomService.socket.off("nextPick");
    this.roomService.socket.off("error");
    this.roomService.socket.off("isPlayerOwner");
  }

  resetRoomAndPlayer() {
    this.room = {
      id: DEFAULT.NO_ROOM,
      size: 0,
      players: new Array(),
      name: "",
      hasStarted: false,
      nbrBooster: 1,
      pkmnPerBooster: 6,
      boostersLeft: 1
    };


    this.player = {
      pseudo: DEFAULT.NO_ROOM,
      toChoseFrom: new Array(),
      team: new Array(),
      sit: 0,
      hasPicked: false
    };
  }

  addOrRemoveFromTeam(newSet: PokemonSet) {
    const finalTeamCpy = [...this.finalTeam];
    const teamCpy = [...this.player.team];

    if (this.isDraftOver) {
      const index = this.finalTeam.findIndex((set) => set.name === newSet.name && set.role === newSet.role);
      const indexTeam = this.player.team.findIndex((set) => set.name === newSet.name && set.role === newSet.role);

      if (index !== -1) {
        finalTeamCpy.splice(index, 1);
        teamCpy.push(newSet);
      } else if (this.finalTeam.length < 6) {
        teamCpy.splice(indexTeam, 1);
        finalTeamCpy.push(newSet);
      }
      this.finalTeam = finalTeamCpy;
      this.player.team = teamCpy;
    }
  }

  makeDefaultFinalTeam() {
    console.log("makeDefault");
    const defaultTeam = [...this.player.team];
    if (defaultTeam.length > 6) {
      defaultTeam.splice(6);
    }
    defaultTeam.forEach(set => {
      this.addOrRemoveFromTeam(set);
    });
  }

  setIsDraftOver(): void {
    this.isDraftOver = this.player.team.length + this.finalTeam.length === this.room.nbrBooster * this.room.pkmnPerBooster;
  }

  copyTeamToClipboard() {
    let exportString = "";

    this.finalTeam.forEach(pkmn => {
      exportString +=
        `${pkmn.name} @ ${pkmn.item.name}
Ability: ${pkmn.ability.name}
Level: 100
Tera Type: ${pkmn.teraType}
EVs: ${pkmn.evs.get('hp')} HP / ${pkmn.evs.get('attack')} Atk / ${pkmn.evs.get('defense')} Def / ${pkmn.evs.get('special-attack')} SpA / ${pkmn.evs.get('special-defense')} SpD / ${pkmn.evs.get('speed')} Spe
Hardy Nature
IVs: ${pkmn.ivs.get('hp')} HP / ${pkmn.ivs.get('attack')} Atk / ${pkmn.ivs.get('defense')} Def / ${pkmn.ivs.get('special-attack')} SpA / ${pkmn.ivs.get('special-defense')} SpD / ${pkmn.ivs.get('speed')} Spe
- ${pkmn.moves[0]?.name}
- ${pkmn.moves[1]?.name}
- ${pkmn.moves[2]?.name}
- ${pkmn.moves[3]?.name}\n\n`;
    });
    this.clipboard.copy(exportString);
    this.snackBar.open('Team copied to clipboard', 'Good!', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  CopyLinkToClipboard() {
    this.clipboard.copy('https://pokemon-randraft-ihm.web.app' + this.router.url);

    this.snackBar.open('Link copied to clipboard', 'Good!', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  deserializePokemonSets(pokemonSets: PokemonSet[]): PokemonSet[] {

    return pokemonSets.map(pokemonSet => {
      return {
        ...pokemonSet,
        baseStats: pokemonSet.baseStats ? this.createEmptyStatMap(new Map(Object.entries(pokemonSet.baseStats)), 0) : this.createEmptyStatMap(new Map<string, number>(), 0),
        evs: pokemonSet.evs ? this.createEmptyStatMap(new Map(Object.entries(pokemonSet.evs)), 85) : this.createEmptyStatMap(new Map<string, number>(), 85),
        ivs: pokemonSet.ivs ? this.createEmptyStatMap(new Map(Object.entries(pokemonSet.ivs)), 31) : this.createEmptyStatMap(new Map<string, number>(), 31)
      };
    });
  }

  createEmptyStatMap(fetchedMap: Map<string, number>, defaultValue: number): Map<string, number> {
    let emptyMap: Map<string, number> = new Map<string, number>();
    emptyMap.set('hp', fetchedMap.get('hp') || defaultValue);
    emptyMap.set('attack', fetchedMap.get('attack') || defaultValue);
    emptyMap.set('defense', fetchedMap.get('defense') || defaultValue);
    emptyMap.set('special-attack', fetchedMap.get('special-attack') || defaultValue);
    emptyMap.set('special-defense', fetchedMap.get('special-defense') || defaultValue);
    emptyMap.set('speed', fetchedMap.get('speed') || defaultValue);

    return emptyMap;
  }

  getPackNumber(nbrBooster: number, boostersLeft: number): number {
    return Math.max(1, nbrBooster - boostersLeft);
  }

  openShowdown() {
    this.copyTeamToClipboard();

    this.snackBar.open('Team copied to clipboard', 'Good!', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
    window.open('https://play.pokemonshowdown.com/teambuilder', '_blank');
  }
}
