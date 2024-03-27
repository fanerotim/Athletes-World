import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Athlete } from '../types/Athlete';
import { ConfirmationService } from 'src/app/shared/confirmation-dialog/confirmation.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-athlete',
  templateUrl: './current-athlete.component.html',
  styleUrls: ['./current-athlete.component.css']
})
export class CurrentAthleteComponent implements OnInit {

  
  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    public confirmationService: ConfirmationService) {}

  athleteDetails = {} as Athlete;
  athleteId: string = '';
  isLogged: boolean = false;

  @Input('likes') likesValue = 0;


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      
      const athleteId = data['athleteId'];
      this.athleteId = athleteId;

      const athleteInfo = this.apiService
      .getOne(athleteId)
      .subscribe(
        (data) => {
        this.athleteDetails = data;
        this.likesValue = data.likes.length;
      },
      (error) => {
        this.router.navigate(['404'])
      })
    })

    //Checks if user is logged in to display Like btn
    this.userService.getProfile().subscribe(data => {
      this.isLogged = !!data;
    })

  }

  handleEdit() {
    this.router.navigate([`athletes/${this.athleteId}/edit`])
  }

  handleDelete() {
    this.confirmationService.confirmationDialog();
  }

  handleLike() {
    this.activatedRoute.params.subscribe(data => {
      let athleteId = data['athleteId'];

      this.apiService.like(athleteId).subscribe(data => {
        this.likesValue = data.likes.length;
        this.athleteDetails = data;
      })
    })
  }
}
