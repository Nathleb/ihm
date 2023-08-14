import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatProgressBarComponent } from './stat-progress-bar.component';

describe('StatProgressBarComponent', () => {
  let component: StatProgressBarComponent;
  let fixture: ComponentFixture<StatProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
