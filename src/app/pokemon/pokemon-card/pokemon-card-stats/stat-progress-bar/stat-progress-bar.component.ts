import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stat-progress-bar',
  templateUrl: './stat-progress-bar.component.html',
  styleUrls: ['./stat-progress-bar.component.scss']
})
export class StatProgressBarComponent {
  @Input() value: number = 50;


  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['value']) {
      this.value = (simpleChanges['value'].currentValue / 400) * 100;
    }
  }

  getColor() {
    const percentage = this.value;
    const red = Math.min(255, Math.floor(percentage * 255 / 50));
    const green = Math.min(255, Math.floor((100 - percentage) * 255 / 50));
    const blue = 0;

    return `rgb(${red}, ${green}, ${blue})`;
  }
}
