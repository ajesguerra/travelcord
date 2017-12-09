import { Component, OnInit } from '@angular/core';
import {TravelerService} from '../../../services/traveler.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-view-following',
  templateUrl: './view-following.component.html',
  styleUrls: ['./view-following.component.css']
})
export class ViewFollowingComponent implements OnInit {
  following: [{}];
  traveler: {};
  constructor(private travelerService: TravelerService,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.traveler = this.sharedService.user;
    for (let x = 0; x < this.sharedService.user['following'].length; x++) {
      this.travelerService.findTravelerById(this.sharedService.user['following'][x])
        .subscribe((traveler: any) => {
          this.following.push(traveler);
        });
    }
  }

}
