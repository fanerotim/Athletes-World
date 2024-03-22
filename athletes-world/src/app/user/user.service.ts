import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './types/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(username: string, email: string, password: string, rePass: string) {
    return this.http.post('http://localhost:3030/user/register', {email, password, rePass})
  }
}
