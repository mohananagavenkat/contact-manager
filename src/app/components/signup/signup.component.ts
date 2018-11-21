import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import * as M from "materialize-css/dist/js/materialize";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["../auth-forms.css"]
})
export class SignupComponent implements OnInit, AfterViewInit {

  @ViewChild('signupForm') signupForm: NgForm;
  error: string;
  signupStatus: boolean = false;
  tokenId: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {
    M.updateTextFields();
  }

  signup() {
    this
      .authService
      .signup(this.signupForm.value)
      .subscribe(
        response => {
          if (response.status == false) {
            this.error = response.error;
            return;
          }
          this.signupStatus = true;
          this.tokenId = response.tokenId;
        }
      )
  }

}
