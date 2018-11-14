import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-contact",
  templateUrl: "./add-contact.component.html",
  styleUrls: ["./add-contact.component.css", "../../auth-forms.css"]
})
export class AddContactComponent implements OnInit {
  @ViewChild("addContactForm") addContactForm: NgForm;

  constructor(private router: Router) {}

  ngOnInit() {}

  addContact() {
    console.log(this.addContactForm);
    console.log(this.addContactForm.value);
    this.addContactForm.resetForm();
    this.router.navigate(["/", "contacts"]);
  }
}
