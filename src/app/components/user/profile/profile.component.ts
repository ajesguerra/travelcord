import { Component, OnInit } from '@angular/core';
import {TravelerService} from '../../../services/traveler.service.client';
import {ActivatedRoute, Router} from '@angular/router';

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

  constructor(private travelerService: TravelerService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.travelerId = params['travelerId'];
        }
      );
    this.travelerService.findTravelerById(this.travelerId).subscribe((theTraveler: any) => {
      this.email = theTraveler.email;
      this.firstName = theTraveler.firstName;
      this.lastName = theTraveler.lastName;
      this.password = theTraveler.password;
    });
  }
  updateTraveler() {
    this.traveler = {_id: this.travelerId,
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName };
    this.travelerService.updateTraveler(this.travelerId, this.traveler).subscribe((theTraveler: any) => {});
  }
  deleteTraveler() {
    this.traveler = {_id: this.travelerId,
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName };
    this.travelerService.deleteTraveler(this.traveler).subscribe((theTraveler: any) => {
      this.router.navigate(['/login/']);
    });
  }
}
