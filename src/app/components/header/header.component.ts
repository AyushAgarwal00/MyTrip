import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.authService.currentUser.subscribe((res) => {
      const currentUser = this.authService.currentUserValue();
      if (currentUser && JSON.stringify(currentUser) != '{}') {
        console.log('Auth Guard Success');
        this.isLoggedIn = true;
      } else {
        this.router.navigate(['/login']);
        this.isLoggedIn = false;
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
