import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonSet } from '../interfaces/pokemonSet';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-card-grid',
  templateUrl: './pokemon-card-grid.component.html',
})
export class PokemonCardGridComponent {

  constructor(private pokemonService: PokemonService) { }

  @Input() pokemonSets: Array<PokemonSet> = new Array<PokemonSet>();
  @Input() isPool: boolean = false;
  @Output() picked: EventEmitter<string> = new EventEmitter<string>();

  pick(name: string) {
    this.picked.emit(name);
  }
}
