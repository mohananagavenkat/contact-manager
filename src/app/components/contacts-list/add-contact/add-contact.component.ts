import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ContactService } from "../../../services/contact.service";

@Component({
  selector: "app-add-contact",
  templateUrl: "./add-contact.component.html",
  styleUrls: ["./add-contact.component.css", "../../auth-forms.css"]
})
export class AddContactComponent implements OnInit {
  @ViewChild("addContactForm") addContactForm: NgForm;

  constructor(
    private router: Router,
    private contactService: ContactService
  ) { }

  ngOnInit() { }

  addContact() {
    console.log(this.addContactForm);
    console.log(this.addContactForm.value);
    this
      .contactService
      .addContact(this.addContactForm.value)
      .subscribe(response => {
        console.log("response received");
        console.log(response);
        if (response.auth === false) {
          this.router.navigate(["/", "user", "signin"]);
        }
        this.addContactForm.resetForm();
      })
  }
}
