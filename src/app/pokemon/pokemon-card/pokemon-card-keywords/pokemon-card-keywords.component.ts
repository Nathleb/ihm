import { Component, Input } from '@angular/core';
import { KeyWord } from 'src/app/pokemon/interfaces/keyWord';
import { colorTable } from '../../interfaces/colors/colorTable';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';
import { textColorTable } from '../../interfaces/colors/textColorTable';

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 100,
  hideDelay: 0,
  touchendHideDelay: 0,
  disableTooltipInteractivity: true,
};


@Component({
  selector: 'app-pokemon-card-keywords',
  templateUrl: './pokemon-card-keywords.component.html',
  styleUrls: ['./pokemon-card-keywords.component.scss']
})
export class PokemonCardKeywordsComponent {
  @Input() item: KeyWord;
  @Input() ability: KeyWord;
  @Input() types: Array<string>;
  @Input() tera: string;



  getColor(type: string): string {
    return colorTable[type];
  }
  getTextColor(type: string): string {
    return textColorTable[type];
  }
  capitalizeWord(str: string) {
    return str.replace(/\b\w/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  preventDefault(event: Event) {
    event.stopPropagation();
  }
}
