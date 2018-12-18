// checkes if user is authenticated, if yes redirect the user to previous url. useful for signup,signin,forgotpassword etc pages. so when user navigate to these pages after login by manually  we simply redirect him back.
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AlreadyAuthenticatedGaurd implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        console.log("Already authemticated gaurd");
        if (this.authService.getAuthStatus()) { // checks whether user already loggedin
            // if (history.length > 1) { // If there exist any history
            //     history.back(); // redirects to previous URL
            // }
            this.router.navigate(['/', 'contacts']);
            return false;
        }
        return true;
    }
}