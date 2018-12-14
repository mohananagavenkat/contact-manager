import {
  Component,
  OnInit,
  HostListener,
  ViewEncapsulation,
  ViewChild,
  OnDestroy
} from "@angular/core";
import { Contact } from "../../interfaces/contact";
import { ContactService } from "../../services/contact.service";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { Subscription } from "rxjs";
import { EditContactComponent } from "./edit-contact/edit-contact.component";
import { ViewContactComponent } from "./view-contact/view-contact.component";

@Component({
  selector: "app-contacts-list",
  templateUrl: "./contacts-list.component.html",
  styleUrls: ["./contacts-list.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ContactsListComponent implements OnInit, OnDestroy {
  contacts;
  canDisplay;
  contactsUpdateSubscriber: Subscription;
  editContactSubscriber: Subscription;
  fetchStatus: string = "Fetching Contacts...";
  editingContact: any;
  @ViewChild('editContactModalRef') editContactModal: EditContactComponent;
  @ViewChild('viewContactModalRef') viewContactModal: ViewContactComponent;
  constructor(
    private contactService: ContactService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    //this.contacts = contactsData;
    console.log("contact-list ngoninit");
    this
      .contactService
      .getContacts()
      .subscribe(
        response => {
          if (response.auth == false) {
            this.authService.logout();
            return this.router.navigate(['/', 'user', 'login']);
          }
          console.log("contacts fetched successfully", response);
          this.contacts = response.contacts || [];
          this.contactService.setContacts(this.contacts);
          if (this.contacts && this.contacts.length == 0) {
            this.fetchStatus = "No Contacts Saved Yet";
          }
        },
        error => {
          console.error(error);
        }
      );
    this.contactsUpdateSubscriber = this
      .contactService
      .getContactsUpdateObservable()
      .subscribe(status => {
        if (status == true)
          this.contacts = this.contactService.contacts;
        if (this.contacts.length == 0)
          this.fetchStatus = "No Contacts Saved Yet";
      })
    this.editContactSubscriber = this
      .contactService
      .getEditContactObservable()
      .subscribe(contactId => {
        this.editContact(contactId);
      })
    this.updateDisplayStatus(window.screen.availWidth);
  }

  ngOnDestroy(): void {
    this.contactsUpdateSubscriber.unsubscribe();
  }

  @HostListener("window:resize", ["$event"])
  onresize(event) {
    this.updateDisplayStatus(window.screen.availWidth);
  }

  @HostListener("document:click", ["$event"])
  closePreviousMore(event) {
    // console.log(event);
    const ele = document.querySelector(".more-options.show");
    if (ele) {
      ele.classList.remove("show");
    }
  }

  editContact(contactId) {
    this.editingContact = this.contactService.getContactById(contactId);
    console.log(this.editingContact);
    this.editContactModal.openModal();
  }

  viewContact(contact) {
    this.viewContactModal.openModal(contact);
  }

  updateDisplayStatus(width) {
    // console.log(width);
    this.canDisplay = {
      name: true,
      email: true,
      phoneNumber: true,
      job: true,
      actions: true
    };
    if (width >= 992 && width < 1200) {
      this.canDisplay.job = false;
    } else if (width >= 768 && width < 992) {
      this.canDisplay.job = false;
      this.canDisplay.email = false;
    } else if (width >= 576 && width < 768) {
      this.canDisplay.job = false;
      this.canDisplay.email = false;
      this.canDisplay.phoneNumber = false;
    } else if (width < 576) {
      this.canDisplay.job = false;
      this.canDisplay.email = false;
      this.canDisplay.phoneNumber = false;
      this.canDisplay.actions = false;
    }
    // console.log(this.canDisplay);
  }
}
