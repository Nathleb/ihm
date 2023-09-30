import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.scss']
})
export class WelcomeMessageComponent {


  constructor(private router: Router, private snackBar: MatSnackBar) { }

  openShowdown() {
    window.open('https://play.pokemonshowdown.com/', '_blank');
  }

  openTutorial() {
    this.router.navigate(["tutorial"]);
  }

  greeting() {
    this.snackBar.open("Pretty generic name.", "Indeed!", {
      duration: 1000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

}
