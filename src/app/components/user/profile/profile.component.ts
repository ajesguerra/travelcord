import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // properties
  userId: string;
  user = {};
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
        }
      );
    this.userService.findUserById(this.userId).subscribe((theUser: any) => {
      this.username = theUser.username;
      this.email = theUser.email;
      this.firstName = theUser.firstName;
      this.lastName = theUser.lastName;
      this.password = theUser.password;
    });
  }
  updateUser() {
    this.user = {_id: this.userId,
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName };
    this.userService.updateUser(this.userId, this.user).subscribe((theUser: any) => {
      this.username = theUser.username;
      this.email = theUser.email;
      this.firstName = theUser.firstName;
      this.lastName = theUser.lastName;
    });
  }
  deleteUser() {
    this.user = {_id: this.userId,
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName };
    this.userService.deleteUser(this.user).subscribe((theUser: any) => {
      this.router.navigate(['/login/']);
    });
  }
}
