import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http.post<any>(
      `${appConfig.apiDomain}/signup`,
      data
    );
  }

  signin(data): Observable<any> {
    return this.http.post<any>(
      `${appConfig.apiDomain}/signup`,
      data
    );
  }

}
