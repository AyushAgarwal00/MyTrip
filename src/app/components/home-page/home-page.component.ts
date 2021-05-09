import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketBookingService } from 'src/app/services/ticket-booking.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(
    private ticketService: TicketBookingService,
    private router: Router
  ) {}

  busCities: string[] = [];
  goingFrom: string = '';
  goingTo: string = '';
  busDate: string = '';

  //For searching destination cities
  destinationCities: string[] = [];

  updatedTodaysDate: string = '';
  invalidDate: boolean = false;
  today = new Date();


  ngOnInit(): void {
    this.busCities = this.ticketService.busCityNames();
  }

  onChange() {
    this.busCities = this.ticketService.busCityNames();
    this.destinationCities = this.arrayRemove(this.busCities, this.goingFrom);
  }

  arrayRemove(arr: any[], value: string) {
    return arr.filter(function (ele) {
      if (JSON.stringify(ele) != JSON.stringify(value)) {
        return ele;
      }
    });
  }

  searchBus() {
    this.ticketService.getCityNameDate(
      this.goingFrom,
      this.goingTo,
      this.busDate
    );
    this.router.navigate(['/searchBus']);
  }

  getTodaysDate() {
    
    let dd = this.today.getDate();
    let mm = this.today.getMonth() + 1;
    let yyyy = this.today.getFullYear();
    let mmString;
    let ddString;

    if (dd < 10) {
      ddString = '0' + dd;
    } else {
      ddString = dd;
    }

    if (mm < 10) {
      mmString = '0' + mm;
    } else {
      mmString = mm;
    }
    this.updatedTodaysDate = yyyy + '-' + mmString + '-' + ddString;

    this.checkValidDate();
  }

  checkValidDate() {
    if (this.busDate >= this.updatedTodaysDate) {
      this.invalidDate = false;
    } else {
      this.invalidDate = true;
    }
  }
}
