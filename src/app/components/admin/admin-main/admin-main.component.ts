import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';
import {TravelerService} from '../../../services/traveler.service.client';
import {ActivitiesService} from '../../../services/activities.service.client';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {

  user = {};
  loggedIn: boolean;
  travelers: any;
  activities: any;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private activitiesService: ActivitiesService,
              private travelerService: TravelerService,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.loggedIn = false;
    this.user = this.sharedService.user;
    if (this.sharedService.user['_id']) {
      this.loggedIn = true;
    }
    this.travelerService.findAllTravelers().subscribe((travelers: any) => {
      this.travelers = travelers;
    });
  }
  deleteTraveler(traveler) {
    this.travelerService.deleteTraveler(traveler).subscribe((t: any) => {
      this.ngOnInit();
    });
  }
  deleteActivity(activityId) {
    this.activitiesService.deleteActivity(activityId).subscribe((t: any) => {
      this.ngOnInit();
    });
  }


}
