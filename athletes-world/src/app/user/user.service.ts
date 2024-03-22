import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserForAuth } from './types/User';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined)
  private user$ = this.user$$.asObservable();

  user: UserForAuth | undefined;
  userSubscription: Subscription;

  constructor(private http: HttpClient) { 
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    })
  }

  register(username: string, email: string, password: string, rePass: string) {
    return this.http.post<UserForAuth>('http://localhost:3030/user/register', {username, email, password, rePass})
    .pipe(tap((user) => this.user$$.next(user)
    ))
  }

  login(email: string, password: string) {
    return this.http.post<UserForAuth>('http://localhost:3030/user/login', {email, password})
    .pipe(tap((user) => this.user$$.next(user)));
  }

  isLogged() {
    return !!this.user;
  }

  logout() {
    //userId is attached just so the route guard on the server can work
    return this.http.post('http://localhost:3030/user/logout', {userId: this.user})
    .pipe(tap((user) => this.user$$.next(undefined)))
  }
}
