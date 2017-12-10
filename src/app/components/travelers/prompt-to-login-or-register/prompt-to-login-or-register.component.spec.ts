import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptToLoginOrRegisterComponent } from './prompt-to-login-or-register.component';

describe('PromptToLoginOrRegisterComponent', () => {
  let component: PromptToLoginOrRegisterComponent;
  let fixture: ComponentFixture<PromptToLoginOrRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromptToLoginOrRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromptToLoginOrRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
