import { Component, OnInit, HostListener } from "@angular/core";
import { Contact } from "../../interfaces/contact";
import { contactsData } from "../../data/contacts.data";

@Component({
  selector: "app-contacts-list",
  templateUrl: "./contacts-list.component.html",
  styleUrls: ["./contacts-list.component.css"]
})
export class ContactsListComponent implements OnInit {
  contacts: Contact[];
  canDisplay;
  constructor() {}

  ngOnInit() {
    this.contacts = contactsData;
    console.log(this.contacts);
    this.updateDisplayStatus(window.screen.availWidth);
  }

  @HostListener("window:resize", ["$event"])
  onresize(event) {
    this.updateDisplayStatus(window.screen.availWidth);
  }

  updateDisplayStatus(width) {
    console.log(width);
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
    console.log(this.canDisplay);
  }
}
