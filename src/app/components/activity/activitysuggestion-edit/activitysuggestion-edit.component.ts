import { Component, OnInit } from '@angular/core';
import {ActivitiesService} from '../../../services/activities.service.client';
import {EventService} from '../../../services/event.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';
import {SuggestionService} from '../../../services/suggestion.service.client';

@Component({
  selector: 'app-activitysuggestion-edit',
  templateUrl: './activitysuggestion-edit.component.html',
  styleUrls: ['./activitysuggestion-edit.component.css']
})
export class ActivitysuggestionEditComponent implements OnInit {

  suggestion: {};
  activityId: string;
  activitySuggestionName: string;
  suggestionLocation: string;
  isEventOwner: boolean;
  errorFlag: boolean;
  errorMsg = 'Those fields cannot be blank.';

  constructor(private activitiesService: ActivitiesService,
              private suggestionService: SuggestionService,
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
          this.activityId = params['activityId'];
          this.suggestionService.findSuggestionById(params['suggestionId']).subscribe((theSuggestion: any) => {
            if (theSuggestion) {
              this.suggestion = theSuggestion;
              this.activitySuggestionName = this.suggestion['activitySuggestionName'];
              this.suggestionLocation = this.suggestion['suggestionLocation'];
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

  updateSuggestion() {
    if ((this.activitySuggestionName === '') || (this.suggestionLocation === '')) {
      this.errorFlag = true;
    } else {
      this.suggestion['activitySuggestionName'] = this.activitySuggestionName;
      this.suggestion['suggestionLocation'] = this.suggestionLocation;
      this.suggestionService.updateSuggestion(this.suggestion['_id'], this.suggestion).subscribe((suggestion: any) => {
        this.router.navigate(['/main']);
      });
    }
  }

  deleteSuggestion() {
    this.suggestionService.deleteSuggestion(this.activityId, this.suggestion['_id']).subscribe((suggestion: any) => {
      this.router.navigate(['/main']);
    });
  }

}
