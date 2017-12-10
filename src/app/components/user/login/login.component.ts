import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {TravelerService} from '../../../services/traveler.service.client';
import {SharedService} from '../../../services/shared.service.client';
import {MarketerService} from '../../../services/marketer.service.client';

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
  errorMsg = 'Invalid email or password !';
  traveler: any;
  userType: string;

  constructor(private travelerService: TravelerService,
              private router: Router,
              private sharedService: SharedService,
              private marketerService: MarketerService) {
  }

  ngOnInit() {
    this.errorFlag = false;
    this.email = '';
    this.password = '';
  }

  login(email: string, password: string) {
    this.email = email;
    this.password = password;
    if (this.email === '' || this.password === '') {
      this.errorFlag = true;
    } else {
      this.travelerService.login(this.email, this.password)
        .subscribe((traveler: any) => {
          this.sharedService.user = traveler;
          this.router.navigate(['/event-list']);
        });
    }
  }

  loginAsMarketer(email, password) {
    this.email = email;
    this.password = password;
    if (this.email === '' || this.password === '') {
      this.errorFlag = true;
    } else {
      console.log('in component marketer');
      this.marketerService.login(this.email, this.password)
        .subscribe((marketer: any) => {
          this.sharedService.user = marketer;
          this.router.navigate(['/marketer']);
        });
    }
  }
}
