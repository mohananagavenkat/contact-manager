import {
  Component,
  OnInit,
  HostListener,
  ViewEncapsulation
} from "@angular/core";
import { Contact } from "../../interfaces/contact";
import { contactsData } from "../../data/contacts.data";
import { ContactService } from "../../services/contact.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-contacts-list",
  templateUrl: "./contacts-list.component.html",
  styleUrls: ["./contacts-list.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ContactsListComponent implements OnInit {
  contacts: Contact[];
  canDisplay;
  constructor(
    private contactService: ContactService,
    private router: Router
  ) { }

  ngOnInit() {
    //this.contacts = contactsData;
    console.log("contact-list ngoninit");
    this.contacts = this.contactService.getContacts();
    this.updateDisplayStatus(window.screen.availWidth);
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

  getContacts() {

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
