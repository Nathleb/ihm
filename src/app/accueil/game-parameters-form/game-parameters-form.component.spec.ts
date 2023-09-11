import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameParametersFormComponent } from './game-parameters-form.component';

describe('GameParametersFormComponent', () => {
  let component: GameParametersFormComponent;
  let fixture: ComponentFixture<GameParametersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameParametersFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameParametersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
