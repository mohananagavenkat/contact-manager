import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["../auth-forms.css"]
})
export class ResetPasswordComponent implements OnInit {
  isAllowedToResetPassword: boolean = false;
  token: string;
  error: string = '';
  id: any;
  resetPasswordForm: FormGroup;
  resetPasswordStatus: boolean = false;
  resetPasswordError: string;
  resetPasswordSuccess: string;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.resetPasswordForm = new FormGroup({
      id: new FormControl(null),
      password: new FormControl(null, { validators: [Validators.required] }),
      confirmPassword: new FormControl(null, { validators: [Validators.required] })
    });
    this.token = this.route.snapshot.params.token;
    this.checkForgotPasswordToken();
  }

  checkForgotPasswordToken() {
    this
      .authService
      .checkForgotPasswordToken({ token: this.token })
      .subscribe(
        response => {
          if (response.status == false) {
            this.error = response.error;
            return;
          }
          this.resetPasswordForm.patchValue({ id: response.id })
          this.isAllowedToResetPassword = true;
          return;
        }
      );
  }

  resetPassword() {
    this
      .authService
      .resetPassword(this.resetPasswordForm.value)
      .subscribe(
        response => {
          if (response.status == false) {
            this.resetPasswordError = response.error;
            return;
          }
          this.resetPasswordStatus = true;
          this.resetPasswordSuccess = response.message;
          setTimeout(() => {
            this.router.navigate(['/', 'user', 'signin']);
          }, 3000)
        }
      )
  }

}
