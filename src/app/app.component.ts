import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from './room/room.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ihm';

  ngOnInit() {
    if (localStorage.getItem("pkmnRndmDraftDeviceId") === null) {
      localStorage.setItem("pkmnRndmDraftDeviceId", crypto.randomUUID());
    }
  }
}
