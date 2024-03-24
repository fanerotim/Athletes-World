import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder } from '@angular/forms';
import { Athlete } from '../types/Athlete';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router) { }

  editForm = this.fb.group({
    name: [''],
    age: [''],
    country: [''],
    achievements: [''],
    imgUrl: ['']
})

    athleteDetails = {} as Athlete;

    ngOnInit(): void {

      this.activatedRoute.params.subscribe(data => {

        let athleteId = data['athleteId'];

        this.apiService.getOne(athleteId).subscribe(athlete => {
          this.athleteDetails = athlete;
        })
      })
    }

    handleEdit() {

    }

    handleCancel(e: Event) {
      e.preventDefault();
      this.router.navigate(['/athletes'])
    }
}
