import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { appConfig } from "../config";
import { Contact } from "../interfaces/contact";
import { Observable, Subject, Subscriber } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  contacts: Contact[];
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  getContacts() {
    if (this.contacts) {
      // return Observable.create((observer: Subscriber<any>) => {
      //   observer.next({ status: true, message: "contcats sent from in memory", contcats: this.contacts });
      //   observer.complete();
      // })
      return this.contacts;
    }
    this.http
      .get<any>(`${appConfig.apiDomain}/contacts`)
      .subscribe(
        response => {
          if (response.auth == false) {
            return this.router.navigate(['/', 'user', 'login']);
          }
          console.log("contacts fetched successfully", response);
          this.contacts = response.contacts;
          return this.contacts;
        },
        error => {
          console.error(error);
        }
      );
  }
  addContact(data): Observable<any> {
    return this.http.post<any>(`${appConfig.apiDomain}/contacts`, data);
  }
  setContacts(contacts) {
    this.contacts = contacts;
  }
  pushContact(contact) {
    this.contacts.push(contact);
  }
}
