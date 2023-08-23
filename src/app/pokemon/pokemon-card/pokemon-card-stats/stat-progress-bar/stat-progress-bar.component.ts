import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stat-progress-bar',
  templateUrl: './stat-progress-bar.component.html',
  styleUrls: ['./stat-progress-bar.component.scss']
})
export class StatProgressBarComponent {
  @Input() value: number;
  @Input() stat: string;


  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['value']) {
      this.value = (simpleChanges['value'].currentValue / 125) * 100;
    }
  }

  getColor(): string {
    const red = Math.round(255 * this.value / 125);
    const green = 255 - red;
    return `rgb(${red}, ${green}, 0)`;
  }
}
