import { Component, } from '@angular/core';
import { DEFAULT } from 'src/app/pokemon/interfaces/enums/default.enum';
import { PokemonSet } from 'src/app/pokemon/interfaces/pokemonSet';
import { PlayerDTO } from '../interfaces/dtos/player.dto';
import { RoomDTO } from '../interfaces/dtos/room.dto';
import { Player } from '../interfaces/player';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-test',
  templateUrl: './room-test.component.html',
})
export class RoomTestComponent {
  constructor(private roomService: RoomService) {
    this.joinedRoom = {
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

  DEFAULT = DEFAULT;

  rooms: RoomDTO[] = new Array();
  joinedRoom: RoomDTO;
  player: PlayerDTO;

  ngOnInit() {
    this.roomService.getAllRooms().subscribe(rooms => {
      this.rooms = rooms;
    });

    this.resetJoinedRoom;
    this.registerEvents();
  }



  createRoom() {
    this.roomService.createRoom(4);
  }

  refresh() {
    this.roomService.getAllRooms().subscribe(rooms => {
      this.rooms = rooms;
    });
  }
  joinRoom(roomId: string) {
    this.roomService.joinRoom(roomId);
  }

  nextBooster(roomId: string) {
    this.roomService.nextBooster(roomId);
  }

  nextPick(roomId: string, name: string) {
    this.roomService.nextPick(roomId, name);
    const index = this.player.toChoseFrom.findIndex(pokemonSet => pokemonSet.name == name);
    this.player.team.push(this.player.toChoseFrom[index]);
    this.player.toChoseFrom.splice(index, 1);
  }

  registerEvents() {
    this.roomService.socket.on("joinRoom", (payload: any) => {
      const { id, size, players, readyToPick, name } = payload;

      const roomDTO: RoomDTO = {
        id: id,
        size: size,
        players: players,
        name: name
      };

      this.joinedRoom = roomDTO;
      console.log(this.joinedRoom);
    });

    this.roomService.socket.on("nextPick", (payload: PlayerDTO) => {
      payload.toChoseFrom = this.deserializePokemonSets(payload.toChoseFrom);
      payload.team = this.deserializePokemonSets(payload.team);

      this.player = { ...payload };

    });
  }

  resetJoinedRoom() {
    this.joinedRoom = {
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
    return pokemonSets.map(pokemonSet => ({
      ...pokemonSet,
      baseStats: pokemonSet.baseStats ? new Map(Object.entries(pokemonSet.baseStats)) : new Map<string, number>(),
      evs: pokemonSet.evs ? new Map(Object.entries(pokemonSet.evs)) : new Map<string, number>(),
      ivs: pokemonSet.ivs ? new Map(Object.entries(pokemonSet.ivs)) : new Map<string, number>()
    }));
  }
}
