import { Component, OnInit } from '@angular/core';
import { TicketBookingService } from 'src/app/services/ticket-booking.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-view-ticket-page',
  templateUrl: './view-ticket-page.component.html',
  styleUrls: ['./view-ticket-page.component.css'],
})
export class ViewTicketPageComponent implements OnInit {
  constructor(private ticketService: TicketBookingService) {}

  bus: any;
  date: string = '';

  username: string = '';
  userEmail: string = '';
  userPhoneNo: number = 0;

  selectedSeats: string[] = [];
  fare: number = 0;

  ticketId = uuid.v4();

  ngOnInit(): void {
    this.bus = this.ticketService.selectedBus[0];
    this.date = this.ticketService.busDate;

    this.username = this.ticketService.username;
    this.userEmail = this.ticketService.userEmail;
    this.userPhoneNo = this.ticketService.userPhoneNo;

    this.selectedSeats = this.ticketService.checkedSeats;

    this.fare = this.ticketService.totalCost;
  }

  goToHome(){
    window.location.reload();
  }
}
