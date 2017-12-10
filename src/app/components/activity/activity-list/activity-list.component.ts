import {Component, OnInit} from '@angular/core';
import {TravelerService} from '../../../services/traveler.service.client';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../../../services/event.service.client';
import {SharedService} from '../../../services/shared.service.client';
import {ActivitiesService} from '../../../services/activities.service.client';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  travelerId: string;
  activities: [{}];
  eventId: string;
  event = {};
  userIsOwner: boolean;
  isLoggedIn: boolean;
  constructor(private eventService: EventService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.eventId = params['eventId'];
        this.event = this.eventService.findEventById(this.eventId).subscribe((event: any) => {
          if (event) {
            this.event = event;
            if (this.event['owner']['_id'] === this.sharedService.user['_id']) {
              this.userIsOwner = true;
            }
            if (this.event['activities']) {
              this.activities = this.event['activities'];
            }
            if (this.sharedService.user['_id']) {
              this.isLoggedIn = true;
            } else {
              this.isLoggedIn = false;
            }
          }
        });
      });
  }

}
