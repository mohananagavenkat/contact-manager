import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { ContactService } from "../../services/contact.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  @Input("contactId") contactId;

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() { }

  ngOnChanges() { }

  onEdit() {
    console.log(`edit contact ${this.contactId}`);
    this.contactService.editContact(this.contactId);
  }
}
