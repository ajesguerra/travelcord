import {Component, OnInit} from '@angular/core';
import {TravelerService} from "../../../services/traveler.service.client";
import {EventService} from "../../../services/event.service.client";
import {ActivatedRoute} from "@angular/router";
import {SharedService} from "../../../services/shared.service.client";

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.css']
})
export class PromotionListComponent implements OnInit {

  travelerId: string;
  traveler: {};
  promotions: [{}];
  promotionExists: boolean;
  isLoggedIn: boolean;

  constructor(private travelerService: TravelerService,
              private eventService: EventService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.promotionExists = false;
    this.isLoggedIn = false;
    if (this.sharedService.user['_id']) {
      if (this.sharedService.user['myPromotions'].length > 0) {
        this.promotions = this.sharedService.user['myPromotions'];
        this.promotionExists = true;
      }
      this.isLoggedIn = true;
    }
  }
}
