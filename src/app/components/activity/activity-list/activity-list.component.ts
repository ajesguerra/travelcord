import { Component, OnInit } from '@angular/core';
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

  constructor(private activitiesService: ActivitiesService,
              private eventService: EventService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { }

  ngOnInit() {

    this.activitiesService.findAllActivitiesForEvent(this.activatedRoute.params['eventId']).subscribe((allActivities: any) => {
      if (allActivities) {
        this.activities = allActivities ;
      }
    });

  }

}
