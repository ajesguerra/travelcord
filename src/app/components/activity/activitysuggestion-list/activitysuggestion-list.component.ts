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
  suggestions: any;
  activityId: string;
  eventId: string;
  isEventOwner: boolean;
  isLoggedIn: boolean;
  constructor(private activitiesService: ActivitiesService,
              private eventService: EventService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.isEventOwner = false;
    this.isLoggedIn = false;
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.activityId = params['activityId'];
        this.eventId = params['eventId'];

        this.eventService.findEventById(params['eventId']).subscribe((theEvent: any) => {
          if (theEvent) {
            if (this.sharedService.user['_id'] == theEvent['owner']['_id']) {
              this.isEventOwner = true;
            }
          }
        });
      });
    this.activitiesService.findAllSuggestionsForActivity(this.activityId).subscribe((allSuggestions: any) => {
      if (allSuggestions) {
        this.suggestions = allSuggestions;
      }
    });
    if (this.sharedService.user['_id']) {
      this.isLoggedIn = true;
    }
  }

  upVote(suggestionId) {
    this.activitiesService.upVote(this.sharedService.user['_id'], suggestionId).subscribe((suggestion: any) => {
      this.ngOnInit();
    });
  }

  unVote(suggestionId) {
    this.activitiesService.unVote(this.sharedService.user['_id'], suggestionId).subscribe((suggestion: any) => {
      this.ngOnInit();
    });
  }

  markAsDecided(suggestionId) {
    this.activitiesService.markAsDecided(this.activityId, suggestionId).subscribe((activity: any) => {
    });
  }
}
