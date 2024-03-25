import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from './confirmation.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {

  constructor(private confirmationService: ConfirmationService) {}

  confirm() {

  }

  reject() {
    this.confirmationService.confirmationDialog();
  }
}
