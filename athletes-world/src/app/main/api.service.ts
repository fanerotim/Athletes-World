import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Athelete } from './types/Athlete';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getAthletes() {
    return this.http.get<Athelete[]>('http://localhost:3030/athletes')
  }
}
