import {Component, OnInit} from '@angular/core';
import {TravelerService} from '../../../services/traveler.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // properties
  travelerId: string;
  traveler = {};
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  dateCreated: Date;
  monthJoined: any;
  yearJoined: any;
  isMarketer: boolean;
  isTraveler: boolean;
  errorFlag: boolean;
  errorMsg = 'Someone else is already registered with that email.';

  constructor(private travelerService: TravelerService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.isMarketer = false;
    this.isTraveler = false;
    this.traveler = this.sharedService.user;
    this.travelerId = this.traveler['_id'];
    this.email = this.traveler['email'];
    this.firstName = this.traveler['firstName'];
    this.lastName = this.traveler['lastName'];
    this.phone = this.traveler['phone'];
    this.dateCreated = new Date(this.traveler['dateCreated']);
    this.monthJoined = this.dateCreated.getMonth();
    this.yearJoined = this.dateCreated.getFullYear();
    if (this.sharedService.user['role'] == 'MARKETER') {
      this.isMarketer = true;
    }
    if (this.sharedService.user['role'] == 'TRAVELER') {
      this.isTraveler = true;
    }
  }

  updateTraveler() {
    this.travelerService.findTravelerByEmail(this.email).subscribe((traveler: any) => {
      if ((traveler) && (traveler.email !== this.sharedService.user['email'])) {
        this.errorFlag = true;
      } else {
        this.sharedService.user['email'] = this.email;
        this.sharedService.user['firstName'] = this.firstName;
        this.sharedService.user['lastName'] = this.lastName;
        this.sharedService.user['phone'] = this.phone;
        this.travelerService.updateTraveler(this.sharedService.user['_id'], this.sharedService.user).subscribe((theTraveler: any) => {
        });
      }
    });
  }

  deleteTraveler() {
    this.travelerService.deleteTraveler(this.sharedService.user).subscribe((theTraveler: any) => {
      this.router.navigate(['/login']);
    });
  }

  logout() {
    this.travelerService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }
}
