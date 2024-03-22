import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { repeatPasswordValidator } from '../validators/repeatPassword-validator';
import { repeat } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../types/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private fb: FormBuilder, 
    private userService: UserService,
    private router: Router) { }

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.minLength(5), emailValidator()]],
    passGroup: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      rePass: ['', [Validators.required]]
    }, {
      validators: [repeatPasswordValidator()]
    })
  })

  get passGroup() {
    return this.registerForm.get('passGroup');
  }

  handleRegister() {
    let username = this.registerForm.value.username;
    let email = this.registerForm.value.email;
    let password = this.registerForm.value.passGroup?.password;
    let rePass = this.registerForm.value.passGroup?.rePass;

    this.userService.register(username!, email!, password!, rePass!)
    .subscribe(data => {
      this.router.navigate([''])
    });
  }
}
