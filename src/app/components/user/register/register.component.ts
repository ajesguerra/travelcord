import {Component, OnInit} from '@angular/core';
import {TravelerService} from '../../../services/traveler.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // properties
  email: string;
  password: string;
  vpassword: string;
  errorFlag: boolean;
  errorMsg = 'Invalid!';
  anExistingTraveler: any;
  aNewTraveler: any;
  constructor(private travelerService: TravelerService,
              private router: Router) {
  }

  ngOnInit() {
    this.errorFlag = false;
    this.email = '';
    this.password = '';
    this.vpassword = '';
  }

  register() {
    this.travelerService.findTravelerByEmail(this.email).subscribe((traveler: any) => {
      this.anExistingTraveler = traveler;
      if (this.anExistingTraveler !== null) {
        this.errorFlag = true;
      } else if (this.password === '' || this.email === '') {
        this.errorFlag = true;
      } else if (this.password !== this.vpassword) {
        this.errorFlag = true;
      } else {
        this.aNewTraveler = {email: this.email, password: this.password};
        this.travelerService.createTraveler(this.aNewTraveler).subscribe((aTraveler: any) => {
          this.router.navigate(['/user/', aTraveler._id]);
        });
      }
    });
  }
}
