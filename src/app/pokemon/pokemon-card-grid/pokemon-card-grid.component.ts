import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { PokemonSet } from '../interfaces/pokemonSet';

@Component({
  selector: 'app-pokemon-card-grid',
  templateUrl: './pokemon-card-grid.component.html',
  styleUrls: ['./pokemon-card-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PokemonCardGridComponent {

  Breakpoint = Breakpoints;

  constructor(public breakpointObserver: BreakpointObserver) {

  }


  @Input() pokemonSets: Array<PokemonSet> = new Array<PokemonSet>();
  @Input() hasPicked: boolean = true;
  @Output() picked: EventEmitter<string> = new EventEmitter<string>();
  @Output() addOrRemoveFromTeam: EventEmitter<PokemonSet> = new EventEmitter<PokemonSet>();
  selected: string;

  pick(set: PokemonSet) {
    if (set.name === this.selected && !this.hasPicked) {
      this.selected = '';
      this.picked.emit(set.name);
    }
    else {
      this.selected = set.name;
      this.addOrRemoveFromTeam.emit(set);
    }
  }
}