import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { PokemonSet } from '../interfaces/pokemonSet';
import { PokemonService } from '../pokemon.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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
  selected: string;

  pick(name: string) {
    if (name === this.selected && !this.hasPicked) {
      this.picked.emit(name);
    }
    else {
      this.selected = name;
    }
  }

  drop(event: CdkDragDrop<PokemonSet[]>) {
    console.log(event);
  }
}