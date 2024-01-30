import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseingLocationComponent } from './houseing-location.component';

describe('HouseingLocationComponent', () => {
  let component: HouseingLocationComponent;
  let fixture: ComponentFixture<HouseingLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HouseingLocationComponent]
    });
    fixture = TestBed.createComponent(HouseingLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
