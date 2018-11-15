import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import * as M from "materialize-css/dist/js/materialize";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["../auth-forms.css"]
})
export class SignupComponent implements OnInit, AfterViewInit {

  @ViewChild('signupForm') signupForm: NgForm;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {
    M.updateTextFields();
  }

  signup() {
    // console.log(this.signupForm.value);
    this.authService.signup(this.signupForm.value);
  }

}
