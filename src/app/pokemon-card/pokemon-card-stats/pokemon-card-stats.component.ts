import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pokemon-card-stats',
  templateUrl: './pokemon-card-stats.component.html',
  styleUrls: ['./pokemon-card-stats.component.scss']
})
export class PokemonCardStatsComponent {

  @Input() evs!: Map<string, number>;
  @Input() ivs!: Map<string, number>;
  @Input() baseStats!: Map<string, number>;

  ngOnChanges(changes: SimpleChanges): void {
    // this.baseStats = new Map(Object.entries(this.baseStats));
    // console.log(this.baseStats.get());
    console.log(this.ivs);
  }
}
