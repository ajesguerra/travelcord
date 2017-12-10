import {Component, OnInit} from '@angular/core';
import {TravelerService} from '../../../services/traveler.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-view-following',
  templateUrl: './view-following.component.html',
  styleUrls: ['./view-following.component.css']
})
export class ViewFollowingComponent implements OnInit {
  following: string[];
  followingUsers = [];
  traveler: {};

  constructor(private travelerService: TravelerService,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.traveler = this.sharedService.user;
    this.following = this.traveler['following'];
    if (this.following) {
      for (let i = 0; i < this.following.length; i++) {
        this.travelerService.findTravelerById(this.following[i])
          .subscribe((traveler: any) => {
            this.followingUsers.push(traveler);
          });
      }
    }
  }
}
