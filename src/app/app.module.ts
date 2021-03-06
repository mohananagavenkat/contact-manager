import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { SignupComponent } from "./components/signup/signup.component";
import { SigninComponent } from "./components/signin/signin.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./components/reset-password/reset-password.component";
import { UserActivationEmailNotifingComponent } from "./components/user-activation-email-notifing/user-activation-email-notifing.component";
import { ForgotPasswordEmailNotifingComponent } from "./components/forgot-password-email-notifing/forgot-password-email-notifing.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ContactsListComponent } from "./components/contacts-list/contacts-list.component";
import { ContactComponent } from "./components/contacts-list/contact/contact.component";
import { ColorService } from "./services/color.service";
import { StarComponent } from "./components/star/star.component";
import { EditComponent } from "./components/edit/edit.component";
import { MoreComponent } from "./components/more/more.component";
import { AddContactComponent } from "./components/contacts-list/add-contact/add-contact.component";
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { UserActivationComponent } from './components/user-activation/user-activation.component';

import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./interceptors/auth.interceptor"

import { AuthGuard } from "./guards/auth.guard";
import { AlreadyAuthenticatedGaurd } from "./guards/alreadyAuthenticated";
import { EditContactComponent } from './components/contacts-list/edit-contact/edit-contact.component';
import { ViewContactComponent } from './components/contacts-list/view-contact/view-contact.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    NotFoundComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    UserActivationEmailNotifingComponent,
    ForgotPasswordEmailNotifingComponent,
    NavbarComponent,
    ContactsListComponent,
    ContactComponent,
    StarComponent,
    EditComponent,
    MoreComponent,
    AddContactComponent,
    CapitalizePipe,
    UserActivationComponent,
    EditContactComponent,
    ViewContactComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ColorService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthGuard,
    AlreadyAuthenticatedGaurd
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
