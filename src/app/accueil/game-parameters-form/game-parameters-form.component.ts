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
      roomName: `Room-${crypto.randomUUID().slice(0, 4)}`,
      size: 8,
      pkmnPerBooster: 6,
      nbrBooster: 1,
      isPublic: true
    };
  }

  startGame() {
    if (this.formIsValid()) {
      this.OnRoomCreation.emit(this.parameters);
    }
  }

  formIsValid() {
    return (
      this.parameters.pkmnPerBooster >= 1 &&
      this.parameters.nbrBooster >= 1 &&
      this.parameters.pkmnPerBooster * this.parameters.nbrBooster <= 18 &&
      this.parameters.roomName.length > 3 && this.parameters.roomName.length < 30
    );
  }
  onFocus(event: any): void {
    event.target.select();
  }
}
