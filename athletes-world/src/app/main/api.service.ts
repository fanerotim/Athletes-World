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
    return this.http.get<Athlete>(`http://localhost:3030/athletes/${id}`)
  }

  createAthlete(name: string, age: string, country: string, achievements: string, imgUrl: string) {
    const athlete = {
      name, 
      age, 
      country, 
      achievements, 
      imgUrl
    }

    return this.http.post<Athlete>(`http://localhost:3030/athletes/create`, athlete)
  }
}
