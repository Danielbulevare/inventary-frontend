import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoticalFormFilteredByMoveComponent } from './histotical-form-filtered-by-move.component';

describe('HistoticalFormFilteredByMoveComponent', () => {
  let component: HistoticalFormFilteredByMoveComponent;
  let fixture: ComponentFixture<HistoticalFormFilteredByMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoticalFormFilteredByMoveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoticalFormFilteredByMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
