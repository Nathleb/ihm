import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/room/room.service';

@Component({
  selector: 'app-reconnect-modal',
  templateUrl: './reconnect-modal.component.html',
  styleUrls: ['./reconnect-modal.component.scss']
})
export class ReconnectModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router, private roomService: RoomService) { }

  redirectToRoom() {
    this.router.navigate(['room', this.data.currentRoom]);
  }

  quitRoom() {
    this.roomService.quitRoom();
  }
}
