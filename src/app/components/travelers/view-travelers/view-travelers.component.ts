import { Component, OnInit } from '@angular/core';
import {TravelerService} from '../../../services/traveler.service.client';

@Component({
  selector: 'app-view-travelers',
  templateUrl: './view-travelers.component.html',
  styleUrls: ['./view-travelers.component.css']
})
export class ViewTravelersComponent implements OnInit {
  travelers: [{}];
  constructor(private travelerService: TravelerService) {
  }

  ngOnInit() {
    this.travelerService.findAllTravelers()
      .subscribe((travelers: any) => {
      this.travelers = travelers;
      });
  }

}
