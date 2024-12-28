import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableColoursComponent } from './available-colours.component';

describe('AvailableColoursComponent', () => {
  let component: AvailableColoursComponent;
  let fixture: ComponentFixture<AvailableColoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableColoursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableColoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




