import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TicketBookingService } from 'src/app/services/ticket-booking.service';

@Component({
  selector: 'app-passenger-info-page',
  templateUrl: './passenger-info-page.component.html',
  styleUrls: ['./passenger-info-page.component.css'],
})
export class PassengerInfoPageComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ticketService: TicketBookingService
  ) {}

  userName: string = '';
  email: string = '';
  phone: number = 0;

  registerForm: FormGroup = this.formBuilder.group({});

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('[0-9]{1,10}'),
      ]),
    });
  }

  get formControl() {
    return this.registerForm.controls;
  }

  collectData() {
    this.userName = this.registerForm.value.name;
    this.email = this.registerForm.value.email;
    this.phone = this.registerForm.value.phone;
    this.ticketService.getUserData(this.userName, this.email, this.phone);

    this.nextPage();
  }

  nextPage() {
    this.router.navigate(['/reviewTicket']);
  }
}
