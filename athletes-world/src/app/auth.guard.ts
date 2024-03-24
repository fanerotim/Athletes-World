import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { BehaviorSubject, Observable, map, EMPTY } from "rxjs";
import { UserService } from "./user/user.service";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private userService: UserService) { }

    isAuthenticated$$ = new BehaviorSubject<boolean>(true);

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
            if (!!data) {
                this.router.navigate(['/404'])
                return false
            } else{
                return true
            }
        }))
    }
}