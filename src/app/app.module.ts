import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SearchDetailsPageComponent } from './components/search-details-page/search-details-page.component';
import { SeatSelectionPageComponent } from './components/seat-selection-page/seat-selection-page.component';
import { PassengerInfoPageComponent } from './components/passenger-info-page/passenger-info-page.component';
import { ReviewTicketPageComponent } from './components/review-ticket-page/review-ticket-page.component';
import { ViewTicketPageComponent } from './components/view-ticket-page/view-ticket-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorDirective } from './color.directive';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    SearchDetailsPageComponent,
    SeatSelectionPageComponent,
    PassengerInfoPageComponent,
    ReviewTicketPageComponent,
    ViewTicketPageComponent,
    ColorDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingBarRouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
