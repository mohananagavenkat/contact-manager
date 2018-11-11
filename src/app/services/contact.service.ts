import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { appConfig } from "../config";
import { Contact } from "../interfaces/contact";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  constructor(private http: HttpClient) {}
  getContacts(): Observable<Contact[]> {
    console.log("getting contacts");
    return this.http.get<Contact[]>(`${appConfig.apiDomain}/contacts`);
  }
}
