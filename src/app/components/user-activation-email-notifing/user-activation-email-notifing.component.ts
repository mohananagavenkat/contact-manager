import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-activation-email-notifing',
  templateUrl: './user-activation-email-notifing.component.html',
  styleUrls: ['./user-activation-email-notifing.component.css']
})
export class UserActivationEmailNotifingComponent implements OnInit {

  @Input('tokenId') tokenId: number;
  error: string;
  success: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    console.log(this.tokenId);
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
        this.success = response.message;
      })
  }

}
