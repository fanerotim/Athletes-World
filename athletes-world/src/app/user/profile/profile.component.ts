import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserForAuth } from '../types/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userInfo = {} as UserForAuth;

  constructor(private userService: UserService) {}

  ngOnInit(): void {

    this.userService.getProfile().subscribe(data => {
      this.userInfo = data;
      console.log(this.userInfo);
    })
  }
}
