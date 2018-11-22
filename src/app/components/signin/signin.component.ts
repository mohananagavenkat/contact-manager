import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["../auth-forms.css"]
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  error: string;
  tokenId: any;
  showUserActivationEmailNotification: boolean = false;
  resendActivation: boolean = false;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl(null, {
        validators: Validators.required
      })
    });
  }

  signin() {
    this
      .authService
      .signin(this.signinForm.value)
      .subscribe(
        (response) => {
          if (!response.data && response.status == false) {
            this.error = response.error;
            return;
          }
          else if (response.data && response.data.tokenId) {
            this.resendActivation = true;
            this.tokenId = response.data.tokenId;
          }
        }
      )
  }

  resendActivationToken() {
    this.authService
      .resendActivationToken(this.tokenId)
      .subscribe((response) => {
        console.log(response);
        if (response.status == false) {
          this.error = response.error;
          return;
        }
        this.showUserActivationEmailNotification = true;
      })
  }
}
