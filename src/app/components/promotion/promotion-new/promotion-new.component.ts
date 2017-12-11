import { Component, OnInit } from '@angular/core';
import {TravelerService} from '../../../services/traveler.service.client';
import {EventService} from '../../../services/event.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';
import {PromotionService} from '../../../services/promotion.service.client';

@Component({
  selector: 'app-promotion-new',
  templateUrl: './promotion-new.component.html',
  styleUrls: ['./promotion-new.component.css']
})
export class PromotionNewComponent implements OnInit {

  travelerId: string;
  suggestionName: string;
  suggestionLocation: string;
  businessName: string;
  businessURL: string;
  aNewPromotion: any;
  errorFlag: boolean;
  errorMsg = 'Those fields cannot be blank.';
  constructor(private travelerService: TravelerService,
              private eventService: EventService,
              private promotionService: PromotionService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.errorFlag = false;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
        }
      );
    this.suggestionName = '';
    this.suggestionLocation = '';
    this.businessName = '';
    this.businessURL = '';
  }
  createPromotion() {
    if (this.suggestionName === ''
      || this.suggestionLocation === ''
      || this.businessName === ''
      || this.businessURL === '') {
      this.errorFlag = true;
    } else {
      this.aNewPromotion = {suggestionName: this.suggestionName,
        suggestionLocation: this.suggestionLocation,
        businessName: this.businessName,
        businessURL: this.businessURL};
      this.promotionService.createPromotion(this.sharedService.user['_id'], this.aNewPromotion).subscribe((thePromotion: any) => {
        this.router.navigate(['/marketer']);
      });
    }
  }

}
