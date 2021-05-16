import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn!: boolean;

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // to return the value in the auth guard
  public currentUserValue(): any {
    return this.currentUserSubject.value;
  }
  url: string = '';
  authenticate(username: string, password: string, loginMode: boolean) {
    if (loginMode) {
      this.url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAQ05kGQA_kpyRUWLiWZg49k_wvwxCouRs`;
    } else {
      this.url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAQ05kGQA_kpyRUWLiWZg49k_wvwxCouRs`;
    }

    return this.http
      .post<any>(this.url, {
        email: username,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        map((user) => {
          console.log('Signing In');

          //Setting the value in sessionStorage/ localStorage

          localStorage.setItem('currentUser', JSON.stringify(user));

          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
