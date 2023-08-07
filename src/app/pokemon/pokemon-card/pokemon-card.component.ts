import { Component, Input } from '@angular/core';
import { PokemonSet } from '../interfaces/pokemonSet';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
})

export class PokemonCardComponent {
  @Input() pokemonSet!: PokemonSet;
}
