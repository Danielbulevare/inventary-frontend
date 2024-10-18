import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoticalTableComponent } from './histotical-table.component';

describe('HistoticalTableComponent', () => {
  let component: HistoticalTableComponent;
  let fixture: ComponentFixture<HistoticalTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoticalTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoticalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
