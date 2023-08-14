import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pokemon-card-stats',
  templateUrl: './pokemon-card-stats.component.html',
  styleUrls: ['./pokemon-card-stats.component.scss']
})
export class PokemonCardStatsComponent implements OnChanges {

  @Input() evs: Map<string, number> = new Map();
  @Input() ivs: Map<string, number> = new Map();
  @Input() baseStats: Map<string, number> = new Map();

  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log(simpleChanges);
  }
}
