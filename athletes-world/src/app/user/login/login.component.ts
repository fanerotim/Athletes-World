import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router) {}

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(5), emailValidator()]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  handleLogin() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.userService.login(email!, password!)
    .subscribe(data => {
      this.router.navigate([''])
    })
  }
} 
