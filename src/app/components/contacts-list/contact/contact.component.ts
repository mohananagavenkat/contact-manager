import { Component, OnInit, Input, OnChanges, ViewChild } from "@angular/core";
import { Contact } from "../../../interfaces/contact";
import { ColorService } from "../../../services/color.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["../contacts-list.component.css"]
})
export class ContactComponent implements OnInit, OnChanges {
  @Input("contact")
  contact: Contact;

  @Input("i")
  i: number;

  @Input("canDisplay")
  canDisplay;

  background: string;

  constructor(
    private colorService: ColorService,
  ) { }

  ngOnInit() { }

  ngOnChanges() {
    //console.log(this.contact.avatar);
    // console.log(this.colorService);
    if (!this.contact.avatar) {
      this.background = this.colorService.getColor();
    }
    // console.log(this.background);
  }
  onContactFocus(event) {
    // console.log("clicked");
    const ele = document.querySelector(".each-contact.has-focus");
    if (ele) {
      ele.classList.remove("has-focus");
    }
    event.target.classList.add("has-focus");
  }
}
