import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketBookingService } from 'src/app/services/ticket-booking.service';

@Component({
  selector: 'app-search-details-page',
  templateUrl: './search-details-page.component.html',
  styleUrls: ['./search-details-page.component.css'],
})
export class SearchDetailsPageComponent implements OnInit {
  constructor(
    private ticketService: TicketBookingService,
    private router: Router
  ) {}

  busFrom: string = '';
  busTo: string = '';
  busDate: string = '';
  busRoutes: any;

  selectedBus: string[] = [];
  searchResult: any;

  ngOnInit(): void {
    this.busFrom = this.ticketService.fromCity;
    this.busTo = this.ticketService.toCity;
    this.busRoutes = this.ticketService.busRoutes;

    this.searchResult = this.arraySearch(
      this.busRoutes,
      this.busFrom,
      this.busTo
    );
  }

  arraySearch(arr: any[], from: string, to: string) {
    return arr.filter(function (element) {
      if (
        JSON.stringify(element.destination) == JSON.stringify(to) &&
        JSON.stringify(element.from) == JSON.stringify(from)
      ) {
        return element;
      }
    });
  }

  sendSelectedBusData(seatData: any) {
    this.selectedBus.push(seatData);
    this.ticketService.selectedBus = this.selectedBus;
    this.router.navigate(['/viewSeats']);
  }
}
