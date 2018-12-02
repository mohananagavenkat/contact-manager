import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appConfig } from "../config";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private activeUser: any;

  constructor(
    private http: HttpClient
  ) {
    console.log("auth service instance created");
    const userData = JSON.parse(window.localStorage.getItem("activeUser"));
    if (userData) {
      this.activateUser = userData;
    }
    console.table(this.activateUser);
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
    window.localStorage.setItem("activeUser", JSON.stringify(userData));
  }

  getActiveUser() {
    return this.activeUser;
  }

}
