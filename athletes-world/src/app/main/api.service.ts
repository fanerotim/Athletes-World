import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Athlete } from './types/Athlete';
import { environment } from 'src/environments/environment.development';
const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAthletes() {
    return this.http.get<Athlete[]>(`${API_URL}/athletes`)
  }

  getOne(id: string) {
    return this.http.get<Athlete>(`${API_URL}/athletes/${id}`)
  }

  createAthlete(name: string, age: string, country: string, achievements: string, imgUrl: string) {
    const athlete = {
      name, 
      age, 
      country, 
      achievements, 
      imgUrl
    }

    return this.http.post<Athlete>(`${API_URL}/athletes/create`, athlete)
  }

  editAthlete(name: string, age: string, country: string, achievements: string, imgUrl: string, id: string) {
    
    const athleteData = {
      name,
      age,
      country,
      achievements,
      imgUrl
    } 
    return this.http.put(`${API_URL}/athletes/edit/${id}`, athleteData);
  }

  delete(id: string) {
    return this.http.delete(`${API_URL}/athletes/delete/${id}`)
  }

  like(id: string) {
    return this.http.get<Athlete>(`${API_URL}/athletes/like/${id}`);
}
}
