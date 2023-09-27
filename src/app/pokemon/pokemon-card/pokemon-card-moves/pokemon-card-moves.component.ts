import { Component, Input } from '@angular/core';
import { Move } from 'src/app/pokemon/interfaces/move';
import { colorTable } from '../../interfaces/colors/colorTable';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 100,
  hideDelay: 0,
  touchendHideDelay: 0,
  disableTooltipInteractivity: true,
};

@Component({
  selector: 'app-pokemon-card-moves',
  templateUrl: './pokemon-card-moves.component.html',
  styleUrls: ['pokemon-card-moves.component.scss'],
  providers: [
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
  ],
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
    if (move.accuracy != true && move.accuracy > 0) {
      tooltip += `Accuracy: ${move.accuracy}`;
    }
    if (tooltip.length > 0) {
      tooltip += "\n";
    }

    tooltip += `Category: ${move.category}\n${move.description}`;
    return tooltip;
  }
}
