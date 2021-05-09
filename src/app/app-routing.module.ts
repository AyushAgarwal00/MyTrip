import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PassengerInfoPageComponent } from './components/passenger-info-page/passenger-info-page.component';
import { ReviewTicketPageComponent } from './components/review-ticket-page/review-ticket-page.component';
import { SearchDetailsPageComponent } from './components/search-details-page/search-details-page.component';
import { SeatSelectionPageComponent } from './components/seat-selection-page/seat-selection-page.component';
import { ViewTicketPageComponent } from './components/view-ticket-page/view-ticket-page.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'searchBus',
    component:SearchDetailsPageComponent
  },
  {
    path:'viewSeats',
    component:SeatSelectionPageComponent
  },
  {
    path:'userInfo',
    component:PassengerInfoPageComponent
  },
  {
    path:'reviewTicket',
    component:ReviewTicketPageComponent
  },
  {
    path:'viewTicket',
    component:ViewTicketPageComponent
  },
  {
    path:'**',
    component:HomePageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
