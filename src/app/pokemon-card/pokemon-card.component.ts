import { Component, Input } from '@angular/core';
import { PokemonSet } from '../classes/pokemonSet';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})

export class PokemonCardComponent {
  constructor() { }

  @Input() pokemonSet!: PokemonSet;
}
