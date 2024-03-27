import { Component, OnInit } from '@angular/core';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = '';

  constructor(private errorService: ErrorService) {}

  ngOnInit(): void {
    this.errorService.error$.subscribe((data: any) => {

      if (data.url.includes('login')) {
        this.errorMessage = data.error.error
      } else if (data.url.includes('register')) {
        console.log(data);
        this.errorMessage = data.error
      } else {
        this.errorMessage = data?.message || '';
      }
      
    })
  }
}
