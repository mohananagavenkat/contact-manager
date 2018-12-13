import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ContactService } from "../../../services/contact.service";
import { AuthService } from "../../../services/auth.service";
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: "app-add-contact",
  templateUrl: "./add-contact.component.html",
  styleUrls: ["./add-contact.component.css", "../../auth-forms.css"]
})
export class AddContactComponent implements OnInit {
  @ViewChild("addContactForm") addContactForm: NgForm;

  constructor(
    private router: Router,
    private contactService: ContactService,
    private authService: AuthService
  ) { }

  ngOnInit() { }

  addContact() {
    console.log(this.addContactForm);
    console.log(this.addContactForm.value);
    const newContcat = this.addContactForm.value;
    this
      .contactService
      .addContact(newContcat)
      .subscribe(response => {
        console.log("response received");
        console.log(response);
        if (response.auth === false) {
          this.authService.logout();
          this.router.navigate(["/", "user", "signin"]);
        }
        this.contactService.pushContact(response.contact);
        this.addContactForm.resetForm();
        M.updateTextFields();
        const previousValidElements = document.querySelectorAll(".valid");
        if (previousValidElements) {
          Array.from(previousValidElements).forEach(ele => ele.classList.remove("valid"))
        }
      })
  }
}
