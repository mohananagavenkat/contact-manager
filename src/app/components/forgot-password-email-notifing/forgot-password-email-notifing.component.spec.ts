import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordEmailNotifingComponent } from './forgot-password-email-notifing.component';

describe('ForgotPasswordEmailNotifingComponent', () => {
  let component: ForgotPasswordEmailNotifingComponent;
  let fixture: ComponentFixture<ForgotPasswordEmailNotifingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordEmailNotifingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordEmailNotifingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
