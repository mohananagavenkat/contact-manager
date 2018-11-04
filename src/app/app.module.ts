import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { SignupComponent } from "./components/signup/signup.component";
import { SigninComponent } from "./components/signin/signin.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./components/reset-password/reset-password.component";
import { UserActivationEmailNotifingComponent } from "./components/user-activation-email-notifing/user-activation-email-notifing.component";
import { ForgotPasswordEmailNotifingComponent } from "./components/forgot-password-email-notifing/forgot-password-email-notifing.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

const appRoutes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/signup" },
  { path: "signup", component: SignupComponent },
  { path: "signin", component: SigninComponent },
  { path: "register", pathMatch: "full", redirectTo: "/signup" },
  { path: "login", pathMatch: "full", redirectTo: "/signin" },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "reset-password", component: ResetPasswordComponent },
  {
    path: "forgot-password-email-notifing",
    component: ForgotPasswordEmailNotifingComponent
  },
  {
    path: "user-activation-email-notifing",
    component: UserActivationEmailNotifingComponent
  },
  { path: "navbar", component: NavbarComponent },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "/404" }
];

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
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
