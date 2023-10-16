import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { PlayerDTO } from '../interfaces/dtos/player.dto';

@Component({
  selector: 'app-table-sits',
  templateUrl: './table-sits.component.html',
  styleUrls: ['./table-sits.component.scss']
})
export class TableSitsComponent {
  @Input() players: Partial<PlayerDTO>[] = [];
  @Input() nickname: string;
  @Input() rotation: boolean = true;
  @Input() isPlayerOwner: boolean;
  @Input() hasStarted: boolean;

  @Output() playerEmitter: EventEmitter<Partial<PlayerDTO>> = new EventEmitter<Partial<PlayerDTO>>();


  ngOnChanges(simpleChanges: SimpleChanges) {
    this.players.sort((a, b) => {
      return a.sit! - b.sit!;
    });
  }

  playerSitOnClick(player: Partial<PlayerDTO>) {
    this.playerEmitter.emit(player);
  }

}
