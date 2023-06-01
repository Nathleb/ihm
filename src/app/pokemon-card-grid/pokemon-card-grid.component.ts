import { Component } from '@angular/core';
import { PokemonSet } from '../classes/pokemonSet';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-card-grid',
  templateUrl: './pokemon-card-grid.component.html',
  styleUrls: ['./pokemon-card-grid.component.scss']
})
export class PokemonCardGridComponent {

  constructor(private pokemonService: PokemonService) { }

  pokemonSets: Array<PokemonSet> = new Array<PokemonSet>();

  ngOnInit() {
    this.pokemonService.getRandomPokemonSample(6)
      .subscribe(sets => {
        this.pokemonSets = sets;
      }
      );
  }

}
