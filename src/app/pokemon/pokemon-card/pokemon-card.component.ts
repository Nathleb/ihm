import { Component, Input } from '@angular/core';
import { PokemonSet } from '../interfaces/pokemonSet';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.style.scss']
})

export class PokemonCardComponent {
  @Input() pokemonSet!: PokemonSet;
}
