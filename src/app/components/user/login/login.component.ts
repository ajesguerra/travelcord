import {Component, OnInit, ViewChild} from '@angular/core';
import { Router} from '@angular/router';
import { UserService } from '../../../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // properties
  username: any;
  password: any;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';
  user: any;
  constructor(private userService: UserService,
              private router: Router) { }
  ngOnInit() {
    this.errorFlag = false;
    this.username = '';
    this.password = '';
  }
  login(username: string, password: string) {
    // alert('username: ' + username + ' password: ' + password);
    this.username = username;
    this.password = password;
    if (this.username === '' || this.password === '') {
      this.errorFlag = true;
    } else {
      this.userService.findUserByCredentials(this.username, this.password).subscribe((user: any) => {
        if (user.username === this.username && user.password === this.password) {
          this.router.navigate(['/user/', user._id]); // change this to profile
          // console.log('routing...');
        }
      });
    }
  }
}
