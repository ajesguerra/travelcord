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
    this.userService.findUserByUsername(this.username).subscribe((user: any) => {
      this.anExistingUser = user;
      if (this.anExistingUser !== null) {
        this.errorFlag = true;
      } else if (this.password === '' || this.username === '') {
        this.errorFlag = true;
      } else if (this.password !== this.vpassword) {
        this.errorFlag = true;
      } else {
        this.aNewUser = {username: this.username, password: this.password};
        this.userService.createUser(this.aNewUser).subscribe((aUser: any) => {
          this.router.navigate(['/user/', aUser._id]);
        });
      }
    });
  }
}
