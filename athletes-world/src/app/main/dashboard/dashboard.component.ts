import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    constructor(private apiService: ApiServiceService) {}

    ngOnInit(): void {
      this.apiService.getAthletes().subscribe((athletes) => {
        console.log('athletes', athletes);
      })
    }
}
