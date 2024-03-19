import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-current-athlete',
  templateUrl: './current-athlete.component.html',
  styleUrls: ['./current-athlete.component.css']
})
export class CurrentAthleteComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      const athleteId = data['athleteId'];

      const athleteInfo = this.apiService
      .getOne(athleteId)
      .subscribe(data => {
        console.log(data);
      })
    })
  }
}
