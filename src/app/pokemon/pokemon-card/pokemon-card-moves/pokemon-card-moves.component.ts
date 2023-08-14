import { Component, Input } from '@angular/core';
import { Move } from 'src/app/pokemon/interfaces/move';

@Component({
  selector: 'app-pokemon-card-moves',
  templateUrl: './pokemon-card-moves.component.html',
})

export class PokemonCardMovesComponent {
  @Input() moves: Array<Move> = new Array<Move>();
}
