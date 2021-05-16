import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { PassengerInfoPageComponent } from './components/passenger-info-page/passenger-info-page.component';
import { ReviewTicketPageComponent } from './components/review-ticket-page/review-ticket-page.component';
import { SearchDetailsPageComponent } from './components/search-details-page/search-details-page.component';
import { SeatSelectionPageComponent } from './components/seat-selection-page/seat-selection-page.component';
import { ViewTicketPageComponent } from './components/view-ticket-page/view-ticket-page.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:'searchBus',
    component:SearchDetailsPageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'viewSeats',
    component:SeatSelectionPageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'userInfo',
    component:PassengerInfoPageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'reviewTicket',
    component:ReviewTicketPageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'viewTicket',
    component:ViewTicketPageComponent,
    canActivate: [AuthGuardService]
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
