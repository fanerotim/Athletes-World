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

  isLogged() {
    console.log(!!this.user);
    return !!this.user;
  }
}
