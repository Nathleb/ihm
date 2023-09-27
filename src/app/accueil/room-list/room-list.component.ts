import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
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
  filteredRooms: RoomDTO[] = [];
  filterValue = '';
  pageSize: number = 10;
  pageIndex: number = 0;
  displayedColumns: string[] = ['roomName', 'name', 'weight', 'symbol'];

  ngOnInit() {
    this.refresh();

  }

  refresh() {
    this.roomService.getAllRooms().subscribe(rooms => {
      this.rooms = rooms;
      this.applyFilter();
    });

    this.roomService.quitRoom();
  }

  joinRoom(room: RoomDTO) {
    if (!room.hasStarted) {
      this.router.navigate(['room', room.id]);
    }
  }

  applyFilter() {
    console.log(this.filterValue);

    if (this.filterValue !== '') {
      this.filteredRooms = this.rooms.filter(room => room.name.includes(this.filterValue));
      console.log(this.filteredRooms);
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
