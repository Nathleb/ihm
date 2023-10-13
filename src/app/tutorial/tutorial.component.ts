import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent {


  constructor(private clipboard: Clipboard, private snackBar: MatSnackBar) {

  }
  copyChallengeRequest() {
    this.clipboard.copy("/challenge [Gen 9] Custom Game @@@ !Team Preview");
    this.snackBar.open('Copied to clipboard', 'Let\'s Battle!', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

}
