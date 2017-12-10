import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ActivitiesService} from '../../../services/activities.service.client';
import {EventService} from '../../../services/event.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {
  activity = {};
  activityExists: boolean;
  showEdit: boolean;
  isEventOwner: boolean;

  constructor(private activitiesService: ActivitiesService,
              private eventService: EventService,
              private sharedService: SharedService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.isEventOwner = false;
    this.activityExists = false;
    this.showEdit = false;
    this.activatedRoute.params
      .subscribe((params: any) => {
        if (params['activityId']) {
          this.activitiesService.findActivityById(params['activityId'])
            .subscribe((activity: any) => {
              this.activity = activity;
              if (activity) {
                this.activityExists = true;
              }
            });
          this.eventService.findEventById(params['eventId']).subscribe((theEvent: any) => {
            if (theEvent) {
              if (this.sharedService.user['_id'] == theEvent['owner']['_id']) {
                this.isEventOwner = true;
              }
            }
          });
        }
      });
  }

}
