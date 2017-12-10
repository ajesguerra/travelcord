import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ActivitiesService} from "../../../services/activities.service.client";

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {
  activity = {};
  activityExists: boolean;
  constructor(private activitiesService: ActivitiesService,
              private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit() {
    this.activityExists = false;
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
        }
      });
  }

}
