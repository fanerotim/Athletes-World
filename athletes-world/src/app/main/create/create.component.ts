import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private fb: FormBuilder) {}

  createForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    age: ['', [Validators.required, Validators.min(18)]],
    country: ['', [Validators.required, Validators.minLength(3)]],
    achievements: ['', [Validators.required, Validators.minLength(7)]],
    imgUrl: ['', [Validators.required]] //TODO: custom validator to check if img url starts with http or https
  })

  handleCreate() {

  }


}
