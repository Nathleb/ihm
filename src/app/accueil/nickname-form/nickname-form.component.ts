import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RoomService } from 'src/app/room/room.service';

@Component({
  selector: 'app-nickname-form',
  templateUrl: './nickname-form.component.html',
  styleUrls: ['./nickname-form.component.scss']
})
export class NicknameFormComponent {


  constructor(private roomService: RoomService, private snackBar: MatSnackBar) {

  }

  @Input() nickname: string;

  updateNickname() {
    if (this.formIsValid()) {
      this.roomService.updateNickname(this.nickname);
    }
    this.snackBar.open('You have a new nickname.', 'Good!', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  formIsValid(): boolean {
    return this.nickname !== undefined && this.nickname.length > 2 &&
      this.nickname.length < 30 &&
      new RegExp(/^[a-zA-Z0-9\- ]+$/).test(this.nickname);
  }

  onFocus(event: any): void {
    event.target.select();
  }
}
