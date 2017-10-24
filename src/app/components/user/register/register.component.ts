import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // properties
  username: string;
  password: string;
  vpassword: string;
  errorFlag: boolean;
  errorMsg = 'Invalid!';
  anExistingUser: any;
  aNewUser: any;
  newUserId: string;
  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.errorFlag = false;
    this.username = '';
    this.password = '';
    this.vpassword = '';
  }

  register() {
    this.anExistingUser = this.userService.findUserByUsername(this.username);
    if (this.anExistingUser === {}) {
      this.errorFlag = true;
    } else if (this.password === '' || this.username === '') {
      this.errorFlag = true;
    } else if (this.password !== this.vpassword) {
      this.errorFlag = true;
    } else {

      this.newUserId = Math.random().toString();
      this.aNewUser = {_id: this.newUserId, username: this.username, password: this.password};
      this.userService.createUser(this.aNewUser).subscribe((user: any) => {});
      this.router.navigate(['/user/', this.newUserId]);
    }
  }
}
