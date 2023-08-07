import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardKeywordsComponent } from './pokemon-card-keywords.component';

describe('PokemonCardKeywordsComponent', () => {
  let component: PokemonCardKeywordsComponent;
  let fixture: ComponentFixture<PokemonCardKeywordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCardKeywordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCardKeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
