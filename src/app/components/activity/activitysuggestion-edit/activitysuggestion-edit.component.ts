import {Component, OnInit} from '@angular/core';
import {ActivitiesService} from '../../../services/activities.service.client';
import {EventService} from '../../../services/event.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';
import {PromotionService} from '../../../services/promotion.service.client';
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
  eventId: string;
  errorFlag: boolean;
  errorMsg = 'Those fields cannot be blank.';
  suggestions: any;
  isLoggedIn: boolean;
  promotions: any;
  activity: any;
  editSuggestionId: string;

  constructor(private activitiesService: ActivitiesService,
              private eventService: EventService,
              private router: Router,
              private promotionService: PromotionService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private suggestionService: SuggestionService) {
  }

  ngOnInit() {
    this.isEventOwner = false;
    this.isLoggedIn = false;
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.activityId = params['activityId'];
        this.eventId = params['eventId'];
        this.editSuggestionId = params['suggestionId'];
        this.eventService.findEventById(params['eventId']).subscribe((theEvent: any) => {
          if (theEvent) {
            if (this.sharedService.user['_id'] == theEvent['owner']['_id']) {
              this.isEventOwner = true;
            }
          }
        });
        this.suggestionService.findSuggestionById(params['suggestionId']).subscribe((suggestion: any) => {
          this.suggestion = suggestion;
          this.activitySuggestionName = suggestion['activitySuggestionName'];
          this.suggestionLocation = suggestion['suggestionLocation'];
        });
      });
    this.activitiesService.findAllSuggestionsForActivity(this.activityId).subscribe((allSuggestions: any) => {
      if (allSuggestions) {
        this.suggestions = allSuggestions;
      }
    });

    this.activitiesService.findActivityById(this.activityId).subscribe((activity: any) => {
      this.activity = activity;
      this.promotions = this.activity['promotions'];

      for (let v = 0; v < this.promotions.length; v++) {
        this.promotions[v]['views'] += 1;
        this.promotionService.updatePromotion(this.promotions[v]).subscribe((promotion: any) => {
        });
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

  removePromotionForMe(promotionId) {
    this.promotionService.removePromotionForMe(this.activityId, promotionId)
      .subscribe((removed: any) => {
        this.ngOnInit();
      });
  }

  updateSuggestion() {
    if ((this.activitySuggestionName === '') || (this.suggestionLocation === '')) {
      this.errorFlag = true;
    } else {
      this.suggestion['activitySuggestionName'] = this.activitySuggestionName;
      this.suggestion['suggestionLocation'] = this.suggestionLocation;
      this.suggestionService.updateSuggestion(this.suggestion['_id'], this.suggestion).subscribe((suggestion: any) => {
        this.ngOnInit();
      });
    }
  }

  deleteSuggestion() {
    this.suggestionService.deleteSuggestion(this.activityId, this.suggestion['_id']).subscribe((suggestion: any) => {
    });
    this.router.navigate(['/event', this.eventId, this.activityId]);
  }

}
