import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pokemon-card-stats',
  templateUrl: './pokemon-card-stats.component.html',
  styleUrls: ['./pokemon-card-stats.component.scss']
})
export class PokemonCardStatsComponent {

  @Input() evs: Map<string, number>;
  @Input() ivs: Map<string, number>;
  @Input() baseStats: Map<string, number>;
  @Input() level: number;


  calculateValue(key: string): number {
    if (key === 'hp') {
      return Math.floor(0.01 * (2 * this.baseStats.get(key)! + this.ivs.get(key)! + Math.floor(0.25 * this.evs.get(key)!)) * this.level) + this.level + 10;
    }
    return Math.floor(0.01 * (2 * this.baseStats.get(key)! + this.ivs.get(key)! + Math.floor(0.25 * this.evs.get(key)!)) * this.level) + 5;
  }
}