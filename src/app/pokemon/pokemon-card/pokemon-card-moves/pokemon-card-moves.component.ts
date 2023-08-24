import { Component, Input } from '@angular/core';
import { Move } from 'src/app/pokemon/interfaces/move';
import { colorTable } from '../../interfaces/colors/colorTable';

@Component({
  selector: 'app-pokemon-card-moves',
  templateUrl: './pokemon-card-moves.component.html',
  styleUrls: ['pokemon-card-moves.component.scss']
})

export class PokemonCardMovesComponent {
  @Input() moves: Array<Move>;


  getColor(type: string): string {
    return colorTable[type];
  }

  getTooltip(move: Move): string {
    let tooltip: string = "";
    if (move.damage > 0) {
      tooltip += `Power: ${move.damage}   `;
    }
    if (move.accuracy > 0) {
      tooltip += `Accuracy: ${move.accuracy}`;
    }
    if (tooltip.length > 0) {
      tooltip += "\n";
    }
    return tooltip += move.description;
  }
}
