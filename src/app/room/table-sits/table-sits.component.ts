import { Component, Input, SimpleChanges } from '@angular/core';
import { PlayerDTO } from '../interfaces/dtos/player.dto';

@Component({
  selector: 'app-table-sits',
  templateUrl: './table-sits.component.html',
  styleUrls: ['./table-sits.component.scss']
})
export class TableSitsComponent {
  @Input() players: Partial<PlayerDTO>[] = [];
  @Input() rotation: boolean = true;


  ngOnChanges(simpleChanges: SimpleChanges) {
    this.players.sort((a, b) => {
      return a.sit! - b.sit!;
    });
  }

}
