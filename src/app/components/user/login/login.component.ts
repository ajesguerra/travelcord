import {Component, OnInit, ViewChild} from '@angular/core';
import { Router} from '@angular/router';
import { TravelerService } from '../../../services/traveler.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // properties
  email: any;
  password: any;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';
  traveler: any;
  constructor(private travelerService: TravelerService,
              private router: Router) { }
  ngOnInit() {
    this.errorFlag = false;
    this.email = '';
    this.password = '';
  }
  login(email: string, password: string) {
    // alert('username: ' + username + ' password: ' + password);
    this.email = email;
    this.password = password;
    if (this.email === '' || this.password === '') {
      this.errorFlag = true;
    } else {
      this.travelerService.findTravelerByCredentials(this.email, this.password).subscribe((traveler: any) => {
        if (traveler.email === this.email && traveler.password === this.password) {
          this.router.navigate(['/traveler/', traveler._id]);
        }
      });
    }
  }
}
