import { Component, Input } from '@angular/core';
import { Move } from 'src/app/pokemon/interfaces/move';

@Component({
  selector: 'app-pokemon-card-moves',
  templateUrl: './pokemon-card-moves.component.html',
  styleUrls: ['./pokemon-card-moves.component.scss']
})

export class PokemonCardMovesComponent {
  @Input() moves: Array<Move> = new Array<Move>();
}
