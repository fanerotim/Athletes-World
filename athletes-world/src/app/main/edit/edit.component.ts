import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private fb: FormBuilder) { }

  editForm = this.fb.group({
    name: [''],
    age: [''],
    country: [''],
    achievements: [''],
    imgUrl: ['']
})


    ngOnInit(): void {

      this.activatedRoute.params.subscribe(data => {

        let athleteId = data['athleteId'];

        this.apiService.getOne(athleteId).subscribe(athlete => {
          console.log(athlete);
        })
      })
    }

    handleEdit() {
      
    }
}
