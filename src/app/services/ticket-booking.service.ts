import { Injectable } from '@angular/core';
import { busCities, busRoutes } from '../data/busData';

@Injectable({
  providedIn: 'root',
})
export class TicketBookingService {
  constructor() {}

  fromCity: string = ''; 
  toCity: string = ''; 
  busRoutes = busRoutes;

  busDate: string = ''; 

  selectedBus: string[] = []; 

  username: string = ''; 
  userEmail: string = ''; 
  userPhoneNo: number = 0; 
  checkedSeats: string[] = []; 
  totalCost: number = 0;


  busCityNames() {
    return busCities;
  }
  getCityNameDate(fromCity: string, toCity: string, busDate: string) {
    this.fromCity = fromCity;
    this.toCity = toCity;
    this.busDate = busDate;
  }

  getUserData(username: string, userEmail: string, userPhoneNo: number) {
    this.username = username;
    this.userEmail = userEmail;
    this.userPhoneNo = userPhoneNo;
  }

  checkedSeatsData(checkedSeats: string[], totalCost: number) {
    this.checkedSeats = checkedSeats;
    this.totalCost = totalCost;
  }
}
