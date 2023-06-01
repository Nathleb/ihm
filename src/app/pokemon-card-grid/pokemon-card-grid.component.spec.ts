import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardGridComponent } from './pokemon-card-grid.component';

describe('PokemonCardGridComponent', () => {
  let component: PokemonCardGridComponent;
  let fixture: ComponentFixture<PokemonCardGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCardGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
