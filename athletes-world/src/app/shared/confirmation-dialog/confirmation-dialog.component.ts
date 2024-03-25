import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from './confirmation.service';
import { ApiService } from 'src/app/main/api.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {

  constructor(
    private confirmationService: ConfirmationService,
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

  confirm() {
    this.activatedRoute.params.subscribe(data => {
      const athleteId = data['athleteId'];

      this.apiService.delete(athleteId).subscribe(data => {
        this.reject();
        this.router.navigate(['/athletes'])
      })
    })
  }

  reject() {
    this.confirmationService.confirmationDialog();
  }
}
