import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router) {}

  createForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    age: ['', [Validators.required, Validators.min(18)]],
    country: ['', [Validators.required, Validators.minLength(3)]],
    achievements: ['', [Validators.required, Validators.minLength(7)]],
    imgUrl: ['', [Validators.required]] //TODO: custom validator to check if img url starts with http or https
  })

  handleCreate() {  
    const name = this.createForm.value.name
    const age = this.createForm.value.age
    const country = this.createForm.value.country
    const achievements = this.createForm.value.achievements
    const imgUrl = this.createForm.value.imgUrl

      const newAthlete = this.apiService.createAthlete(
        name!,
        age!,
        country!,
        achievements!,
        imgUrl!,
      ).subscribe(data => {
        this.router.navigate(['athletes'])
      })
  }
}
