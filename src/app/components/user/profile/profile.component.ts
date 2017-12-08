import { Component, OnInit } from '@angular/core';
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

  constructor(private travelerService: TravelerService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    console.log(this.sharedService.user);
    this.traveler = this.sharedService.user;
    this.travelerId = this.traveler['_id'];
    this.email = this.traveler['email'];
    this.firstName = this.traveler['firstName'];
    this.lastName = this.traveler['lastName'];
    this.password = this.traveler['password'];
  }
  updateTraveler() {
    this.sharedService.user['email'] = this.email;
    this.sharedService.user['firstName'] = this.firstName;
    this.sharedService.user['lastName'] = this.lastName;
    this.travelerService.updateTraveler(this.sharedService.user['_id'], this.sharedService.user).subscribe((theTraveler: any) => {});
  }
  deleteTraveler() {
    this.travelerService.deleteTraveler(this.sharedService.user).subscribe((theTraveler: any) => {
      this.router.navigate(['/login']);
    });
  }
}
