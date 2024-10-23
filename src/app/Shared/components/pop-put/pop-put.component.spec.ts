import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopPutComponent } from './pop-put.component';

describe('PopPutComponent', () => {
  let component: PopPutComponent;
  let fixture: ComponentFixture<PopPutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopPutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
