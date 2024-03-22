import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(
    private userService: UserService,
    private router: Router) {}

 
  get isAuth()  {
    return this.userService.isLogged();
  }

  logout() {
    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate([''])
      },
      error: () => {
        this.router.navigate([''])
      }
    })  
  } 
}
