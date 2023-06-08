import { Component, Input, SimpleChanges } from '@angular/core';
import { PokemonSet } from '../classes/pokemonSet';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})

export class PokemonCardComponent {
  @Input() pokemonSet!: PokemonSet;
}
