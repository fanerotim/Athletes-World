import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Athlete } from '../types/Athlete';
import { ConfirmationService } from 'src/app/shared/confirmation-dialog/confirmation.service';

@Component({
  selector: 'app-current-athlete',
  templateUrl: './current-athlete.component.html',
  styleUrls: ['./current-athlete.component.css']
})
export class CurrentAthleteComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public confirmationService: ConfirmationService) {}

  athleteDetails = {} as Athlete;

  athleteId: string = '';

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      
      const athleteId = data['athleteId'];
      this.athleteId = athleteId;

      const athleteInfo = this.apiService
      .getOne(athleteId)
      .subscribe(data => {
        this.athleteDetails = data;
      })
    })
  }

  handleEdit() {
    this.router.navigate([`athletes/${this.athleteId}/edit`])
  }


  handleDelete() {
    this.confirmationService.confirmationDialog();
  }
}
