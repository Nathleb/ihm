import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stat-progress-bar',
  templateUrl: './stat-progress-bar.component.html',
  styleUrls: ['./stat-progress-bar.component.scss']
})
export class StatProgressBarComponent {
  @Input() value: number;
  realValue: number;
  @Input() stat: string;

  statDico: { [index: string]: string; } = {
    hp: "hp",
    attack: "atk",
    defense: "def",
    "special-attack": "spA",
    "special-defense": "spD",
    speed: "spe"
  };


  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges["value"]) {
      this.realValue = simpleChanges['value'].currentValue;
      this.value = (simpleChanges['value'].currentValue / 350) * 100;
    }
    if (simpleChanges["stat"]) {
      this.stat = this.statDico[simpleChanges["stat"].currentValue];
    }
  }


  getColor(): string {
    const red = Math.round(255 * this.value / 100);
    const green = 255 - red;
    return `rgb(${red}, ${green}, 100)`;
  }
}
