import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["../auth-forms.css"]
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  showForgotPasswordEmailNotification: boolean = false;
  error: string;
  tokenId: any;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl(null, { validators: [Validators.required, Validators.email] })
    });
  }

  forgotPassword() {
    this
      .authService
      .forgotPassword(this.forgotPasswordForm.value)
      .subscribe(
        response => {
          if (response.status == false) {
            this.error = response.error;
            return;
          }
          this.showForgotPasswordEmailNotification = true;
          this.tokenId = response.tokenId;
          return;
        }
      )
  }

}
