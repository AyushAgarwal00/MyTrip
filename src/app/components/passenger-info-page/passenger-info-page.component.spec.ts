import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerInfoPageComponent } from './passenger-info-page.component';

describe('PassengerInfoPageComponent', () => {
  let component: PassengerInfoPageComponent;
  let fixture: ComponentFixture<PassengerInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerInfoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
