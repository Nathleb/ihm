import { Component, EventEmitter, Output } from '@angular/core';
import { GameParameters } from '../../room/interfaces/gameParameters';

@Component({
  selector: 'app-game-parameters-form',
  templateUrl: './game-parameters-form.component.html',
  styleUrls: ['./game-parameters-form.component.scss']
})
export class GameParametersFormComponent {

  @Output() OnRoomCreation: EventEmitter<GameParameters> = new EventEmitter<GameParameters>();
  parameters: GameParameters;

  ngOnInit() {
    this.parameters = {
      roomName: '',
      size: 8,
      pkmnPerBooster: 6,
      nbrBooster: 1
    };
  }

  startGame() {
    this.OnRoomCreation.emit(this.parameters);
  }

  formIsValid() {
    console.log(this.parameters.pkmnPerBooster >= 1 &&
      this.parameters.nbrBooster >= 1 &&
      this.parameters.pkmnPerBooster * this.parameters.nbrBooster <= 18 &&
      this.parameters.roomName.length > 3 && this.parameters.roomName.length < 50);
    return (
      this.parameters.pkmnPerBooster >= 1 &&
      this.parameters.nbrBooster >= 1 &&
      this.parameters.pkmnPerBooster * this.parameters.nbrBooster <= 18 &&
      this.parameters.roomName.length > 3 && this.parameters.roomName.length < 50
    );
  }
}
