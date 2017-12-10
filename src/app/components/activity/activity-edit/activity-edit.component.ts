import {Component, OnInit} from '@angular/core';
import {ActivitiesService} from '../../../services/activities.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';
import {EventService} from '../../../services/event.service.client';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.css']
})
export class ActivityEditComponent implements OnInit {
  activity: {};
  activityName: string;
  description: string;
  isEventOwner: boolean;
  startDate: Date;
  newStartDate: Date;
  errorFlag: boolean;
  errorMsg = 'Those fields cannot be blank.';

  constructor(private activitiesService: ActivitiesService,
              private eventService: EventService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.isEventOwner = false;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.activitiesService.findActivityById(params['activityId']).subscribe((theActivity: any) => {
            if (theActivity) {
              this.activity = theActivity;
              this.activityName = this.activity['activityName'];
              this.description = this.activity['description'];
              this.startDate = this.activity['startDate'];
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
      );
  }

  updateActivity() {
    if ((!this.newStartDate) || (this.activityName === '') || (this.description === '')) {
      this.errorFlag = true;
    } else {
      this.activity['activityName'] = this.activityName;
      this.activity['description'] = this.description;
      this.activity['startDate'] = new Date(this.newStartDate);
      this.activity['startDate'].setMinutes(this.activity['startDate'].getMinutes() + this.activity['startDate'].getTimezoneOffset());
      this.activitiesService.updateActivity(this.activity['_id'], this.activity).subscribe((activity: any) => {
        window.location.reload();
      });
    }
  }

  deleteActivity() {
    this.activitiesService.deleteActivity(this.activity['_id']).subscribe((activity: any) => {
      this.router.navigate(['/main']);
    });
  }

}
