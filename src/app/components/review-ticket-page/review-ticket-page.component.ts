import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketBookingService } from 'src/app/services/ticket-booking.service';

@Component({
  selector: 'app-review-ticket-page',
  templateUrl: './review-ticket-page.component.html',
  styleUrls: ['./review-ticket-page.component.css'],
})
export class ReviewTicketPageComponent implements OnInit {
  constructor(
    private ticketService: TicketBookingService,
    private router: Router
  ) {}

  date: string = '';
  bus: any;
  checkedSeats: string[] = [];

  ngOnInit(): void {
    this.bus = this.ticketService.selectedBus[0];
    this.date = this.ticketService.busDate;
    this.checkedSeats = this.ticketService.checkedSeats;
  }

  goToViewTicket() {
    this.router.navigate(['/viewTicket']);
  }
}
