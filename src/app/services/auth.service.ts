import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appConfig } from "../config";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private activeUser: any;
  isAuthenticated: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    console.log("auth service instance created");
    const userData = JSON.parse(localStorage.getItem("activeUser"));
    if (userData) {
      this.activeUser = userData;
    }
    console.table(this.activeUser);
  }

  signup(data): Observable<any> {
    return this.http.post(
      `${appConfig.apiDomain}/user/signup`,
      data,
    );
  }

  signin(data): Observable<any> {
    return this.http.post<any>(
      `${appConfig.apiDomain}/user/signin`,
      data
    );
  }

  resendActivationToken(tokenId): Observable<any> {
    return this.http.get<any>(`${appConfig.apiDomain}/user/resend/activationtoken/${tokenId}`)
  }

  activateUser(token): Observable<any> {
    return this.http.get<any>(`${appConfig.apiDomain}/user/activate/${token}`);
  }

  forgotPassword(data): Observable<any> {
    return this.http.post<any>(
      `${appConfig.apiDomain}/user/forgotpassword`,
      data
    );
  }

  resendForgotPasswordToken(tokenId): Observable<any> {
    return this.http.get<any>(`${appConfig.apiDomain}/user/resend/forgotpasswordtoken/${tokenId}`)
  }

  checkForgotPasswordToken(data): Observable<any> {
    return this.http.post<any>(`${appConfig.apiDomain}/user/forgotpassword/validatetoken`, data);
  }

  resetPassword(data): Observable<any> {
    return this.http.post<any>(`${appConfig.apiDomain}/user/resetpassword`, data);
  }

  getToken() {
    return (this.activeUser && this.activeUser.token) ? this.activeUser.token : undefined;
  }

  setActiveUser(userData) {
    this.activeUser = userData;
    localStorage.setItem("activeUser", JSON.stringify(userData));
  }

  getActiveUser() {
    return this.activeUser;
  }

  clearActiveUser() {
    localStorage.removeItem("activeUser");
    this.activateUser = null;
    this.isAuthenticated = false;
  }

  getAuthStatus() {
    return this.isAuthenticated;
  }

  autoLogin() {
    console.log("auth service executed");
    if (!this.activeUser || !this.activeUser.token) {
      console.log("if block executed");
      return;
    }
    this.isAuthenticated = true;
  }

  logout() {
    this.clearActiveUser();
    this.router.navigate(['/', 'user', 'login']);
  }

}
