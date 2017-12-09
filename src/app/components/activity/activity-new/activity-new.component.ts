import { Component, OnInit } from '@angular/core';
import {TravelerService} from '../../../services/traveler.service.client';
import {EventService} from '../../../services/event.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';
import {ActivitiesService} from '../../../services/activities.service.client';

@Component({
  selector: 'app-activity-new',
  templateUrl: './activity-new.component.html',
  styleUrls: ['./activity-new.component.css']
})
export class ActivityNewComponent implements OnInit {
  travelerId: string;
  eventId: string;
  activities = [{}];
  activityname: string;
  description: string;
  aNewActivity: any;
  errorFlag: boolean;
  errorMsg = 'Those fields cannot be blank.';
  constructor(private travelerService: TravelerService,
              private eventService: EventService,
              private activityService: ActivitiesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.errorFlag = false;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.eventId = params['eventId'];
          this.activityService.findAllActivitiesForEvent(this.eventId).subscribe((theActivities: any) => {
            if (theActivities) {
              this.activities = theActivities;
            }
          });
          this.activityname = '';
          this.description = '';
        }
      );
  }

  createActivity() {
    if (this.activityname === '' || this.description === '') {
      this.errorFlag = true;
    } else {
      console.log(this.activityname);
      this.aNewActivity = {activityName: this.activityname,
        description: this.description};
      this.activityService.createActivity(this.eventId, this.aNewActivity).subscribe((theActivities: any) => {
        this.router.navigate(['/event-list']);
      });
    }
  }
}
