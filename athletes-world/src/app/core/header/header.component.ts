import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
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
    private router: Router,
    private el: ElementRef,
    private renderer: Renderer2) { }

  //HIDE NAVIGATION ON SCROLL TO AVOID OVERLAP
  @HostListener('window:scroll', [])
  onScroll() {

    if (scrollY > 90) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none')
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'block')
    }
  }

  get isAuth() {
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
