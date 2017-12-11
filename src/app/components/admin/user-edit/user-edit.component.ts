import {Component, OnInit} from '@angular/core';
import {TravelerService} from '../../../services/traveler.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

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
  errorMsg = 'Someone else is already registered with that email.';

  constructor(private travelerService: TravelerService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.travelerId = params['travelerId'];
          this.travelerService.findTravelerById(this.travelerId).subscribe((traveler: any) => {
            this.traveler = traveler;
            this.travelerId = this.traveler['_id'];
            this.email = this.traveler['email'];
            this.firstName = this.traveler['firstName'];
            this.lastName = this.traveler['lastName'];
            this.phone = this.traveler['phone'];
            this.role = this.traveler['role'];
            this.dateCreated = new Date(this.traveler['dateCreated']);
            this.monthJoined = this.dateCreated.getMonth();
            this.yearJoined = this.dateCreated.getFullYear();
          });
        }
      );
    if (this.sharedService.user['role'] == 'MARKETER') {
      this.isMarketer = true;
    }
    if (this.sharedService.user['role'] == 'TRAVELER') {
      this.isTraveler = true;
    }
  }

  updateTraveler() {
    this.travelerService.findTravelerByEmail(this.email).subscribe((traveler: any) => {
      if ((traveler) && (this.email !== '') && (traveler.email == this.sharedService.user['email'])) {
        this.errorFlag = true;
      } else {
        this.traveler['email'] = this.email;
        this.traveler['firstName'] = this.firstName;
        this.traveler['lastName'] = this.lastName;
        this.traveler['phone'] = this.phone;
        this.traveler['role'] = this.role;
        this.travelerService.updateTraveler(this.travelerId, this.traveler).subscribe((theTraveler: any) => {
          this.router.navigate(['/admin']);
        });
      }
    });
  }

  deleteTraveler() {
    this.travelerService.deleteTraveler(this.traveler).subscribe((theTraveler: any) => {
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
