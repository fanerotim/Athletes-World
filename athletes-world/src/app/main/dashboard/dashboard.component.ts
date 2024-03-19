import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Athlete } from '../types/Athlete';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    constructor(private apiService: ApiService) {}

    athleteList: Athlete[] = [];
    
    isLoading = true;

    ngOnInit(): void {
      this.apiService.getAthletes().subscribe((athletes) => {
        this.isLoading = false;
        this.athleteList = athletes;
        console.log(this.athleteList);
      })
    }
}
