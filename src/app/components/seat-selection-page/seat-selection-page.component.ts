import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { seatMatrix } from 'src/app/data/busData';
import { TicketBookingService } from 'src/app/services/ticket-booking.service';

@Component({
  selector: 'app-seat-selection-page',
  templateUrl: './seat-selection-page.component.html',
  styleUrls: ['./seat-selection-page.component.css'],
})
export class SeatSelectionPageComponent implements OnInit {
  constructor(
    private ticketService: TicketBookingService,
    private router: Router
  ) {}

  seatMatrix = seatMatrix;

  selectedBus: any;
  totalCost: number = 0;
  noSeatSelected: boolean = true;

  seatId: string = '';
  checkedSeats: string[] = [];
  maxSeatSelected: boolean = false;

  seatNotSelectedImage = 'assets/img/seat1.png';
  seatSelectedImage = 'assets/img/seat2.png';

  ngOnInit(): void {
    this.selectedBus = this.ticketService.selectedBus;
    this.fetchCheckedIDs();
  }

  changeSeatSelection(id: any) {
    var seatImageId = <HTMLImageElement>document.getElementById(id.id + 'i');

    if (id.isChecked) {
      seatImageId.src = this.seatSelectedImage;
    } else {
      seatImageId.src = this.seatNotSelectedImage;
    }
  }

  onUpdate(id: any) {
    this.changeSeatSelection(id);

    this.fetchCheckedIDs();
    this.totalCost = this.checkedSeats.length * this.selectedBus[0].fare;

    if (this.checkedSeats.length == 0) {
      this.noSeatSelected = true;
    } else {
      this.noSeatSelected = false;
    }

    this.ticketService.checkedSeatsData(this.checkedSeats, this.totalCost);
  }

  fetchCheckedIDs() {
    this.checkedSeats = [];
    this.seatMatrix.forEach((value) => {
      value.forEach((element: any) => {
        if (element.isChecked) {
          this.seatId = element.id;
          if (this.checkedSeats.length > 3) {
            this.maxSeatSelected = true;
          } else {
            this.maxSeatSelected = false;
            this.checkedSeats.push(this.seatId);
          }
        }
      });
    });
  }

  goToUserInfoPage() {
    this.router.navigate(['/userInfo']);
  }
}
