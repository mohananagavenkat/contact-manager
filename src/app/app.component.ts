import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'contact-manager2';
  constructor(
    private authService: AuthService,
    private contactService: ContactService
  ) { }
  ngOnInit() {
    this.authService.autoLogin();
  }
}
