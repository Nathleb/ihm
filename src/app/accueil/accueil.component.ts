import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DEFAULT } from '../pokemon/interfaces/enums/default.enum';
import { RoomDTO } from '../room/interfaces/dtos/room.dto';
import { GameParameters } from '../room/interfaces/gameParameters';
import { RoomService } from '../room/room.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  constructor(private roomService: RoomService, private router: Router) {
  }

  DEFAULT = DEFAULT;

  rooms: RoomDTO[] = new Array();

  ngOnInit() {
    this.registerEvents();
  }

  createRoom(gameParameters: GameParameters) {
    this.roomService.createRoom(gameParameters);
  }

  registerEvents() {
    this.roomService.socket.on("createRoom", (roomId: string) => {
      this.router.navigate(['room', roomId]);
    });
  }
}