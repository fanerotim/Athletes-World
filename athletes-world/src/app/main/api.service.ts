import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Athlete } from './types/Athlete';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAthletes() {
    return this.http.get<Athlete[]>('http://localhost:3030/athletes')
  }

  getOne(id: string) {
    console.log(id);
    return this.http.get<Athlete>(`http://localhost:3030/athletes/${id}`)
  }
}
