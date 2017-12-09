import { Component, OnInit } from '@angular/core';
import {PlaceService} from '../../../services/place.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {ActivitiesService} from '../../../services/activities.service.client';

@Component({
  selector: 'app-activitysuggestion-new',
  templateUrl: './activitysuggestion-new.component.html',
  styleUrls: ['./activitysuggestion-new.component.css']
})
export class ActivitysuggestionNewComponent implements OnInit {
  activityId: string;
  eventId: string;
  searchTerm: string;
  result: [{}];
  details: [{}];
  reviews: [{}];
  detailsFlag: boolean;
  aNewSuggestion: any;
  constructor(private placeService: PlaceService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private activitiesService: ActivitiesService) { }
  ngOnInit() {
    this.detailsFlag = false;
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.activityId = params['activityId'];
        this.eventId = params['eventId'];
      });
  }

  placesAutoComplete() {
    this.placeService.placesAutoComplete(this.searchTerm).subscribe((results: any) => {
      console.log(results);
      this.result = results;
    });
  }

  addSuggestion(placeid) {
    this.placeService.moreDetails(placeid).subscribe((details: any) => {
      this.aNewSuggestion = {activitySuggestionName: details.name, suggestionLocation: details.formatted_address};
      this.activitiesService.addSuggestion(this.activityId, this.aNewSuggestion)
        .subscribe((suggestion: any) => {
          this.router.navigate(['/event-list']);
      });
    });
  }

  moreDetails(placeid) {
    this.placeService.moreDetails(placeid).subscribe((details: any) => {
      console.log(details);
      this.detailsFlag = true;
      this.details = details;
      this.reviews = details.reviews;
    });
  }

}
