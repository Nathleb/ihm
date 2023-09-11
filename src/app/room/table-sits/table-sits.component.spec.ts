import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSitsComponent } from './table-sits.component';

describe('TableSitsComponent', () => {
  let component: TableSitsComponent;
  let fixture: ComponentFixture<TableSitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
