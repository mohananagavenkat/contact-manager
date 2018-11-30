import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
import { Injectable } from "@angular/core";
// since HTTP interceptor is also a kind of service we nedd to use Injectable decorator if we want to inject other services into this.
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // Injecting auth service to get token
  constructor(
    private authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const token = this.authService.getToken();
    // transforming the request - adding authorization header
    const authRequest = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${token}`)
    });
    // passing request to the next handler
    return next.handle(authRequest);
  }
}
