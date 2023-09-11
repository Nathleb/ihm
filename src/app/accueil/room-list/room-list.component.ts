import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DEFAULT } from 'src/app/pokemon/interfaces/enums/default.enum';
import { RoomDTO } from 'src/app/room/interfaces/dtos/room.dto';
import { RoomService } from 'src/app/room/room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent {

  constructor(private roomService: RoomService, private router: Router) {
  }
  rooms: RoomDTO[] = new Array();
  displayedColumns: string[] = ['roomName', 'name', 'weight', 'symbol'];

  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.roomService.getAllRooms().subscribe(rooms => {
      this.rooms = rooms;
    });

    this.roomService.quitRoom();
  }

  joinRoom(room: RoomDTO) {
    if (!room.hasStarted) {
      this.router.navigate(['room', room.id]);
    }
  }

}
