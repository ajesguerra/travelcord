import {Component, OnInit, ViewChild} from '@angular/core';
import { Router} from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // properties
  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private userService: UserService,
              private router: Router) { }
  ngOnInit() {
    this.errorFlag = false;
  }
  login(username: string, password: string) {
    // alert('username: ' + username + ' password: ' + password);
    this.username = username;
    this.password = password;
    const user = this.userService.findUserByUsername(this.username);
    if (user.username === this.username && user.password === this.password) {
      this.router.navigate(['/user/', user._id ]); // change this to profile
      // console.log('routing...');
    } else {
      // console.log('not found...');
      this.errorFlag = true;
    }
  }
}
