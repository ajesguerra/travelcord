import { Component, OnInit } from '@angular/core';
import {TravelerService} from '../../../services/traveler.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-view-travelers',
  templateUrl: './view-travelers.component.html',
  styleUrls: ['./view-travelers.component.css']
})
export class ViewTravelersComponent implements OnInit {
  travelers: [{}];
  travelerId: string;
  constructor(private travelerService: TravelerService,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.travelerService.findAllTravelers()
      .subscribe((travelers: any) => {
      this.travelers = travelers;
      });
    this.travelerId = this.sharedService.user['_id'];
  }

  follow(personToFollow) {
    this.travelerService.follow(this.travelerId, personToFollow)
      .subscribe((traveler: any) => {
      });
  }

}
