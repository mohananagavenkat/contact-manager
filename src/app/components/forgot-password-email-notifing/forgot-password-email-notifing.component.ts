import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password-email-notifing',
  templateUrl: './forgot-password-email-notifing.component.html',
  styleUrls: ['./forgot-password-email-notifing.component.css']
})
export class ForgotPasswordEmailNotifingComponent implements OnInit {

  @Input('tokenId') tokenId: number;
  error: string;
  success: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  resendForgotPasswordToken() {
    this.authService
      .resendForgotPasswordToken(this.tokenId)
      .subscribe((response) => {
        console.log(response);
        if (response.status == false) {
          this.error = response.error;
          return;
        }
        this.success = response.message;
      })
  }

}
