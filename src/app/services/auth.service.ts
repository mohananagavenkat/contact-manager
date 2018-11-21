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
    console.log("sending signup request to the api");
    console.log(data);
    return this.http.post(
      `${appConfig.apiDomain}/user/signup`,
      data,
      {
        headers: new HttpHeaders({
          'Content-Type': "application/json"
        })
      }
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

}
