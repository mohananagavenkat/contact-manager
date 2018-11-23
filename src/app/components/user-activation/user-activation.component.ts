import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-activation',
  templateUrl: './user-activation.component.html',
  styleUrls: ['./user-activation.component.css']
})
export class UserActivationComponent implements OnInit {

  userActivationRequestStatus: boolean = false;
  userActivationStatus: boolean = false;
  token: string;
  error: string;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.token = this.route.snapshot.params.token;
    this.activateUser();
  }

  activateUser() {
    this
      .authService
      .activateUser(this.token)
      .subscribe(
        (response) => {
          this.userActivationRequestStatus = true;
          if (response.status == false) {
            this.userActivationStatus = false;
            this.error = response.error;
            return;
          }
          this.userActivationStatus = true;
        }
      )
  }

}
