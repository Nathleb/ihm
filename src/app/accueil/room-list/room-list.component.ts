import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { RoomDTO } from 'src/app/room/interfaces/dtos/room.dto';
import { RoomService } from 'src/app/room/room.service';
import { DEFAULT } from 'src/app/pokemon/interfaces/enums/default.enum';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent {

  constructor(private roomService: RoomService, private router: Router) {
  }
  DEFAULT = DEFAULT;
  rooms: RoomDTO[] = new Array();
  filteredRooms: RoomDTO[] = [];
  filterValue = '';
  pageSize: number = 10;
  pageIndex: number = 0;
  displayedColumns: string[] = ['roomName', 'name', 'weight', 'symbol'];
  @Input() currentRoomId: string;

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.roomService.getAllRooms().subscribe(rooms => {
      this.rooms = rooms;
      this.applyFilter();
    });
  }

  joinRoom(room: RoomDTO) {
    if (!room.hasStarted) {
      this.router.navigate(['room', room.id]);
    }
  }

  redirectToRoom(roomId: string) {
    this.router.navigate(['room', roomId]);
  }

  applyFilter() {
    if (this.filterValue !== '') {
      this.filteredRooms = this.rooms.filter(room => room.name.includes(this.filterValue));
    }
    else {
      this.filteredRooms = this.rooms;
    }

    this.pageIndex = 0;
  }

  pageEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

}
