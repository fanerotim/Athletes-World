import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { BehaviorSubject, EMPTY, Observable } from "rxjs";
import { UserService } from "./user/user.service";
import { UserForAuth } from "./user/types/User";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private userService: UserService) { }


    isAuthenticated$$ = new BehaviorSubject<UserForAuth | boolean>(true);

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):
        boolean |
        UrlTree |
        Observable<boolean |
            UrlTree> |
        Promise<boolean |
            UrlTree> {
        return this.isAuth(state.url) || this.router.createUrlTree(['/404'])
    }

    isAuth(url: string) {
        this.userService.getProfile().subscribe(data => this.isAuthenticated$$.next(!!data));


        if (this.isAuthenticated$$.value) {
            return false
        } else {
            return true
        }
    }
}