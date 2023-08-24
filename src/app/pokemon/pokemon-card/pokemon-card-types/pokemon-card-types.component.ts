import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card-types',
  templateUrl: './pokemon-card-types.component.html',
  styleUrls: ['./pokemon-card-types.component.scss']
})
export class PokemonCardTypesComponent {
  @Input() types: Array<string>;
  @Input() tera: string;
}
