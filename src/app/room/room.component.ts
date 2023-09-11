import { Component, Input, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DEFAULT } from '../pokemon/interfaces/enums/default.enum';
import { PokemonSet } from '../pokemon/interfaces/pokemonSet';
import { PlayerDTO } from './interfaces/dtos/player.dto';
import { RoomDTO } from './interfaces/dtos/room.dto';
import { RoomService } from './room.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { GameParameters } from './interfaces/gameParameters';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {
  constructor(private roomService: RoomService, private router: Router, private route: ActivatedRoute, private ngZone: NgZone) {
  }

  @Input() room: RoomDTO;
  player: PlayerDTO;
  isPlayerOwner: boolean;

  ngOnInit() {
    this.resetRoomAndPlayer();
    this.route.paramMap.subscribe(params => {
      const roomId = params.get('roomId');
      if (roomId) {
        this.roomService.joinRoom(roomId);
        this.roomService.isPlayerOwner(roomId);
      }
    });
    this.registerEvents();
  }

  startGame(roomId: string) {
    this.roomService.startGame(roomId);
  }

  nextPick(roomId: string, name: string) {
    this.roomService.nextPick(roomId, name);
    const index = this.player.toChoseFrom.findIndex(pokemonSet => pokemonSet.name == name);
    this.player.team.push(this.player.toChoseFrom[index]);
    this.player.toChoseFrom.splice(index, 1);
  }

  registerEvents() {

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

    this.roomService.socket.on("updateHasPickedStatus", (players: Partial<PlayerDTO>[]) => {
      this.room.players = players;
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
    });

    this.roomService.socket.on("error", (error: string) => {
      this.router.navigate([""]);
    });

    this.roomService.socket.on("isPlayerOwner", (isPlayerOwner: boolean) => {
      this.isPlayerOwner = isPlayerOwner;
    });
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

  copyTeamToClipboard() {
    this.player.team.filter(pkmn => {
    });
  }

  deserializePokemonSets(pokemonSets: PokemonSet[]): PokemonSet[] {

    return pokemonSets.map(pokemonSet => {
      return {
        ...pokemonSet,
        baseStats: pokemonSet.baseStats ? this.createEmptyStatMap(new Map(Object.entries(pokemonSet.baseStats))) : this.createEmptyStatMap(new Map<string, number>()),
        evs: pokemonSet.evs ? this.createEmptyStatMap(new Map(Object.entries(pokemonSet.evs))) : this.createEmptyStatMap(new Map<string, number>()),
        ivs: pokemonSet.ivs ? this.createEmptyStatMap(new Map(Object.entries(pokemonSet.ivs))) : this.createEmptyStatMap(new Map<string, number>())
      };
    });
  }

  createEmptyStatMap(fetchedMap: Map<string, number>): Map<string, number> {
    let emptyMap: Map<string, number> = new Map<string, number>();
    emptyMap.set('hp', fetchedMap.get('hp') || 0);
    emptyMap.set('attack', fetchedMap.get('attack') || 0);
    emptyMap.set('defense', fetchedMap.get('defense') || 0);
    emptyMap.set('special-attack', fetchedMap.get('special-attack') || 0);
    emptyMap.set('special-defense', fetchedMap.get('special-defense') || 0);
    emptyMap.set('speed', fetchedMap.get('speed') || 0);

    return emptyMap;
  }
}
