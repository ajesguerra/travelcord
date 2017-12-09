import { Component, OnInit } from '@angular/core';
import {ActivitiesService} from '../../../services/activities.service.client';
import {EventService} from '../../../services/event.service.client';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-activitysuggestion-list',
  templateUrl: './activitysuggestion-list.component.html',
  styleUrls: ['./activitysuggestion-list.component.css']
})
export class ActivitysuggestionListComponent implements OnInit {
  suggestions: [{}];
  activityId: string;
  eventId: string;
  constructor(private activitiesService: ActivitiesService,
              private eventService: EventService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.activityId = params['activityId'];
        this.eventId = params['eventId'];
      });
    this.activitiesService.findAllSuggestionsForActivity(this.activityId).subscribe((allSuggestions: any) => {
      if (allSuggestions) {
        this.suggestions = allSuggestions;
      }
    });
  }

  upVote(suggestionId) {
    this.activitiesService.upVote(this.sharedService.user['_id'], suggestionId).subscribe((suggestion: any) => {
      this.ngOnInit();
    });
  }
}
