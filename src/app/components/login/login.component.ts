import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({});
  err: string = '';
  loading: boolean = false;
  success: boolean = false;
  loginMode: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onFormSubmit() {
    if (this.loginForm.invalid) {
      console.log('Invalid credentials');
      return;
    } else {
      this.loading = true;
      this.err = '';

      console.log(this.loginForm.value);

      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.authService.authenticate(email, password, this.loginMode).subscribe(
        (res) => {
          console.log(res);
          this.loading = false;
          this.success = true;
          this.authService.isLoggedIn = true;

          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000);

          console.log(res);
        },
        (error) => {
          this.loading = false;
          this.authService.isLoggedIn = false;
          this.err = error.error.error.message;

          console.log(this.err);
        }
      );
    }
  }

  onModeSwitch() {
    this.loginMode = !this.loginMode;
  }
}
