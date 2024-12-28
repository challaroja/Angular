import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformPopupComponent } from './platform-popup.component';

describe('PlatformPopupComponent', () => {
  let component: PlatformPopupComponent;
  let fixture: ComponentFixture<PlatformPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
