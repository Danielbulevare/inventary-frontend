import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockFormFilteredByStatusComponent } from './stock-form-filtered-by-status.component';

describe('StockFormFilteredByStatusComponent', () => {
  let component: StockFormFilteredByStatusComponent;
  let fixture: ComponentFixture<StockFormFilteredByStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockFormFilteredByStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockFormFilteredByStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
