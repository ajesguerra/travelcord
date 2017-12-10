import {Component, OnInit} from '@angular/core';
import {TravelerService} from '../../../services/traveler.service.client';
import {EventService} from '../../../services/event.service.client';
import {PromotionService} from '../../../services/promotion.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-promotion-edit',
  templateUrl: './promotion-edit.component.html',
  styleUrls: ['./promotion-edit.component.css']
})
export class PromotionEditComponent implements OnInit {

  travelerId: string;
  suggestionName: string;
  suggestionLocation: string;
  businessName: string;
  businessURL: string;
  thePromotion: any;
  errorFlag: boolean;
  errorMsg = 'Those fields cannot be blank.';

  constructor(private travelerService: TravelerService,
              private eventService: EventService,
              private promotionService: PromotionService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.errorFlag = false;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.promotionService.findPromotionById(params['promotionId'])
            .subscribe((promotion: any) => {
              this.thePromotion = promotion;
              this.suggestionName = this.thePromotion['suggestionName'];
              this.suggestionLocation = this.thePromotion['suggestionLocation'];
              this.businessName = this.thePromotion['businessName'];
              this.businessURL = this.thePromotion['businessURL'];
            });
        }
      );
  }

  updatePromotion() {
    if (this.suggestionName === ''
      || this.suggestionLocation === ''
      || this.businessName === ''
      || this.businessURL === '') {
      this.errorFlag = true;
    } else {
      this.thePromotion['suggestionName'] = this.suggestionName;
      this.thePromotion['suggestionLocation'] = this.suggestionLocation;
      this.thePromotion['businessName'] = this.businessName;
      this.thePromotion['businessURL'] = this.businessURL;
      this.promotionService.updatePromotion(this.thePromotion).subscribe((thePromotion: any) => {
        this.router.navigate(['/marketer']);
      });
    }
  }

  deletePromotion() {
    this.promotionService.deletePromotion(this.thePromotion['_id'], this.sharedService.user['_id']).subscribe((thePromotion: any) => {
      this.router.navigate(['/marketer']);
    });
  }
}
