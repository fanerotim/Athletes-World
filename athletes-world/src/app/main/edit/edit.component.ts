import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, Validators } from '@angular/forms';
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
    name: ['', [Validators.required, Validators.minLength(5)]],
    age: ['', [Validators.required, Validators.min(18)]],
    country: ['', [Validators.required, Validators.minLength(3)]],
    achievements: ['', [Validators.required, Validators.minLength(7)]],
    imgUrl: ['', [Validators.required]]
    //TODO: create custom validator to check if image url starts with http or https
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
