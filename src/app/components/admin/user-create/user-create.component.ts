import {Component, OnInit} from '@angular/core';
import {TravelerService} from '../../../services/traveler.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  // properties
  travelerId: string;
  traveler = {};
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  role: string;
  dateCreated: Date;
  monthJoined: any;
  yearJoined: any;
  isMarketer: boolean;
  isTraveler: boolean;
  errorFlag: boolean;
  errorMsg = 'Email required. Role must be TRAVELER, MARKETER, or ADMIN';

  constructor(private travelerService: TravelerService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) {
  }

  ngOnInit() {
  }

  createTraveler() {
    this.travelerService.findTravelerByEmail(this.email).subscribe((traveler: any) => {
      if (traveler !== null) {
        this.errorFlag = true;
      } else if ((this.email === '') || (this.password === '')) {
        this.errorFlag = true;
      } else {
        this.traveler['email'] = this.email;
        this.traveler['password'] = this.password;
        this.travelerService.register(this.email, this.password).subscribe((theTraveler: any) => {
          this.router.navigate(['/admin']);
        });
      }
    });
  }
}
