import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["../auth-forms.css"]
})
export class SignupComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    M.updateTextFields();
  }
}
