import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActivationEmailNotifingComponent } from './user-activation-email-notifing.component';

describe('UserActivationEmailNotifingComponent', () => {
  let component: UserActivationEmailNotifingComponent;
  let fixture: ComponentFixture<UserActivationEmailNotifingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserActivationEmailNotifingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserActivationEmailNotifingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
