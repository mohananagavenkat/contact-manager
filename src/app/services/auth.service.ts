import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appConfig } from "../config";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

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

}
