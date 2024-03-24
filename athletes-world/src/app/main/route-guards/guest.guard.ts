import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map } from "rxjs";
import { UserService } from "src/app/user/user.service";

@Injectable({
    providedIn: 'root',
})

export class GuestGuard implements CanActivate {

    constructor(
        private router: Router,
        private userService: UserService) {}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): 
        boolean | 
        UrlTree | 
        Observable<boolean |
         UrlTree> | 
         Promise<boolean | 
         UrlTree> {
        return this.userService.getProfile().pipe(map(data => {
            if (data) {
                return true
            } else {
                this.router.navigate(['/404'])
                return false;
            }
        }))
    }
}