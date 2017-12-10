import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-prompt-to-login-or-register',
  templateUrl: './prompt-to-login-or-register.component.html',
  styleUrls: ['./prompt-to-login-or-register.component.css']
})
export class PromptToLoginOrRegisterComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    if (this.sharedService.user['_id']) {
      this.isLoggedIn = true;
    }
  }

}
