import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  constructor() { }

  dialog: boolean = true;

  confirmationDialog() {
    return this.dialog = !this.dialog;
  }
}
