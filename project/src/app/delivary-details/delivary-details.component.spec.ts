import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivaryDetailsComponent } from './delivary-details.component';

describe('DelivaryDetailsComponent', () => {
  let component: DelivaryDetailsComponent;
  let fixture: ComponentFixture<DelivaryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelivaryDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelivaryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
