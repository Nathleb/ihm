import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardTypesComponent } from './pokemon-card-types.component';

describe('PokemonCardTypesComponent', () => {
  let component: PokemonCardTypesComponent;
  let fixture: ComponentFixture<PokemonCardTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCardTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCardTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
