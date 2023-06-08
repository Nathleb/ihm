import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardStatsComponent } from './pokemon-card-stats.component';

describe('PokemonCardStatsComponent', () => {
  let component: PokemonCardStatsComponent;
  let fixture: ComponentFixture<PokemonCardStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCardStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCardStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
