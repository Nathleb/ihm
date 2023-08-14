import { Component, Input } from '@angular/core';
import { KeyWord } from 'src/app/pokemon/interfaces/keyWord';

@Component({
  selector: 'app-pokemon-card-keywords',
  templateUrl: './pokemon-card-keywords.component.html',
})
export class PokemonCardKeywordsComponent {


  @Input() item!: KeyWord;
  @Input() ability!: KeyWord;

}
