import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pokemon-card-stats',
  templateUrl: './pokemon-card-stats.component.html',
  styleUrls: ['./pokemon-card-stats.component.scss']
})
export class PokemonCardStatsComponent implements OnChanges {

  @Input() evs: Map<string, number>;
  @Input() ivs: Map<string, number>;
  @Input() baseStats: Map<string, number>;

  ngOnChanges(simpleChanges: SimpleChanges) {
  }
}
