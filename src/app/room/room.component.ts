import { Component, Input, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DEFAULT } from '../pokemon/interfaces/enums/default.enum';
import { PokemonSet } from '../pokemon/interfaces/pokemonSet';
import { PlayerDTO } from './interfaces/dtos/player.dto';
import { RoomDTO } from './interfaces/dtos/room.dto';
import { RoomService } from './room.service';

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

  ngOnInit() {
    this.resetRoomAndPlayer();
    this.route.paramMap.subscribe(params => {
      const roomId = params.get('roomId');
      if (roomId) {
        this.roomService.joinRoom(roomId);
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
      const { id, size, players, name } = room;

      const roomDTO: RoomDTO = {
        id: id,
        size: size,
        players: players,
        name: name
      };
      this.room = roomDTO;
    });

    this.roomService.socket.on("nextPick", (player: PlayerDTO) => {
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
  }

  resetRoomAndPlayer() {
    this.room = {
      id: DEFAULT.NO_ROOM,
      size: 0,
      players: new Array(),
      name: ""
    };

    this.player = {
      pseudo: DEFAULT.NO_ROOM,
      toChoseFrom: new Array(),
      team: new Array(),
      sit: 0,
      hasPicked: false
    };
  }

  deserializePokemonSets(pokemonSets: PokemonSet[]): PokemonSet[] {

    return pokemonSets.map(pokemonSet => {
      return {
        ...pokemonSet,
        baseStats: pokemonSet.baseStats ? new Map(Object.entries(pokemonSet.baseStats)) : new Map<string, number>(),
        evs: pokemonSet.evs ? new Map(Object.entries(pokemonSet.evs)) : new Map<string, number>(),
        ivs: pokemonSet.ivs ? new Map(Object.entries(pokemonSet.ivs)) : new Map<string, number>()
      };
    });
  }
}
