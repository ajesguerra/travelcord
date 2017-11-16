import { Component, OnInit } from '@angular/core';
import {PlaceService} from '../../services/place.service.client';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-placestest',
  templateUrl: './placestest.component.html',
  styleUrls: ['./placestest.component.css']
})
export class PlacestestComponent implements OnInit {
  searchTerm: string;
  result: [{}];
  details: [{}];
  reviews: [{}];
  detailsFlag: boolean;
  constructor(private placeService: PlaceService) { }
  ngOnInit() {
    this.detailsFlag = false;
  }

  placesAutoComplete() {
    this.placeService.placesAutoComplete(this.searchTerm).subscribe((results: any) => {
      console.log(results);
      this.result = results;
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
