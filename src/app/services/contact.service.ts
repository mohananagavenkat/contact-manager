import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { appConfig } from "../config";
import { Contact } from "../interfaces/contact";
import { Observable, Subject, Subscriber } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  contacts = [];
  private contactsUpdateObservable = new Subject<boolean>();
  private editContactObservable = new Subject<number>();
  constructor(
    private http: HttpClient,
  ) { }
  /******************* Methods dealing with server side api *************************/
  // sends get request to server and returns contacts
  getContacts() {
    return this.http
      .get<any>(`${appConfig.apiDomain}/contacts`)
  }
  // sends post request to server to store new contact
  addContact(data): Observable<any> {
    return this.http.post<any>(`${appConfig.apiDomain}/contacts`, data);
  }
  deleteContact(contactId) {
    return this.http.delete<any>(`${appConfig.apiDomain}/contacts/${contactId}`);
  }
  updateContact(contactId, updatedContact) {
    return this.http.put<any>(`${appConfig.apiDomain}/contacts/${contactId}`, updatedContact);
  }
  /******************* Methods dealing with local data *************************/
  // intialize the local contacts
  setContacts(contacts) {
    this.contacts = contacts;
  }
  // adds the new contact to local contacts
  pushContact(contact) {
    this.contacts.push(contact);
    this.contactsUpdateObservable.next(true);
  }
  // removes the contacts from local contacts
  popContact(contactId) {
    this.contacts = this.contacts.filter(contact => contact._id !== contactId);
    this.contactsUpdateObservable.next(true);
  }
  // return the contact from local contacts of specific id
  getContactById(contactId) {
    return this.contacts.find(contact => contact._id == contactId);
  }
  editContactEmitter(contactId) {
    this.editContactObservable.next(contactId);
  }
  updateContactLocal(updatedContact) {
    const index = this.contacts.findIndex(contact => contact._id = updatedContact._id);
    this.contacts[index] = updatedContact;
    this.contactsUpdateObservable.next(true);
  }

  // observables which emits some data to make components aware of changes
  getContactsUpdateObservable() {
    return this.contactsUpdateObservable.asObservable();
  }
  getEditContactObservable() {
    return this.editContactObservable.asObservable();
  }

  getPrintableContact(contactId?) {
    if (contactId) {
      let contacts = [this.getContactById(contactId)];
      return this.generatePrintHtml(contacts);
    }
    return this.generatePrintHtml(this.contacts);
  }
  generatePrintHtml(contacts) {
    let html = `
    `;
    contacts.forEach(contact => {
      html += `
        <h2>${contact.firstName} ${contact.lastName}</h2>
        ${contact.email ? `<p>Email:${contact.email}<p>` : ""}
        ${contact.job ? `<p>Job:${contact.job}<p>` : ""}
        ${contact.company ? `<p>Company:${contact.company}<p>` : ""}
        ${contact.phoneNumber ? `<p>PhoneNumber:${contact.phoneNumber}<p>` : ""}
        <hr />
      `
    });
    return html;
  }
}
