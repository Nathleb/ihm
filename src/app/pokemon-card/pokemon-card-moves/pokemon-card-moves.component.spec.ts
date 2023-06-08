import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardMovesComponent } from './pokemon-card-moves.component';

describe('PokemonCardMovesComponent', () => {
  let component: PokemonCardMovesComponent;
  let fixture: ComponentFixture<PokemonCardMovesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCardMovesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCardMovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
