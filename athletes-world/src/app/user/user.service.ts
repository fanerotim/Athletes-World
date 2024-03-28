import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserForAuth } from './types/User';
import { BehaviorSubject, Subscription, tap } from 'rxjs'
import { environment } from 'src/environments/environment.development';
const API_URL = environment.API_URL;

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
    return this.http.post<UserForAuth>(`${API_URL}/user/register`, {username, email, password, rePass})
    .pipe(tap((user) => this.user$$.next(user)
    ))
  }

  login(email: string, password: string) {
    return this.http.post<UserForAuth>(`${API_URL}/user/login`, {email, password})
    .pipe(tap((user) => {this.user$$.next(user)}));
  }

  isLogged() {
    return !!this.user;
  }

  logout() {
    //userId is attached just so the route guard on the server can work
    return this.http.post(`${API_URL}/user/logout`, {})
    .pipe(tap((user) => this.user$$.next(undefined)))
  }

  getProfile() {
    return this.http.get<UserForAuth>(`${API_URL}/user/profile`)
    .pipe(tap((user) => {
      this.user$$.next(user)
    }))
  }

  //TODO unsubsribe from the Subscription on ngOnDestroy
}
