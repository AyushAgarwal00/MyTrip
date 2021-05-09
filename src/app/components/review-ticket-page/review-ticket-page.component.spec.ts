import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewTicketPageComponent } from './review-ticket-page.component';

describe('ReviewTicketPageComponent', () => {
  let component: ReviewTicketPageComponent;
  let fixture: ComponentFixture<ReviewTicketPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewTicketPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewTicketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
