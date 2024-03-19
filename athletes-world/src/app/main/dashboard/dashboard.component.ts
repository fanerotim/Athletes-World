import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api.service';
import { Athelete } from '../types/Athlete';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    constructor(private apiService: ApiServiceService) {}

    athleteList: Athelete[] = [];

    ngOnInit(): void {
      this.apiService.getAthletes().subscribe((athletes) => {
        this.athleteList = athletes;
      })
    }
}
