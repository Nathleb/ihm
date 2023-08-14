import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DEFAULT } from '../pokemon/interfaces/enums/default.enum';
import { PlayerDTO } from '../room/interfaces/dtos/player.dto';
import { RoomDTO } from '../room/interfaces/dtos/room.dto';
import { RoomService } from '../room/room.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
})
export class AccueilComponent {

  constructor(private roomService: RoomService, private router: Router) {
  }

  DEFAULT = DEFAULT;

  rooms: RoomDTO[] = new Array();

  ngOnInit() {
    this.refresh();
    this.registerEvents();
  }

  createRoom() {
    this.roomService.createRoom(4);
  }

  refresh() {
    this.roomService.getAllRooms().subscribe(rooms => {
      this.rooms = rooms;
    });

    this.roomService.quitRoom();
  }

  joinRoom(roomId: string) {
    this.router.navigate(['room', roomId]);
  }

  registerEvents() {
    this.roomService.socket.on("createRoom", (roomId: string) => {
      this.router.navigate(['room', roomId]);
    });
  }
}