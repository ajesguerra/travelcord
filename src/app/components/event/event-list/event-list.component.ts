import { Component, OnInit } from '@angular/core';
import {TravelerService} from '../../../services/traveler.service.client';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../../../services/event.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  travelerId: string;
  events: [{}];
  constructor(private travelerService: TravelerService,
              private eventService: EventService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.travelerId = params['tid'];
        }
      );

    console.log(this.travelerId);
    if (this.travelerId) {
      this.travelerService.findAllEventsForTraveler(this.travelerId).subscribe((theEvents: any) => {
        if (theEvents) {
          this.events = theEvents;
        }
      });
    } else {
      this.travelerService.findAllEventsForTraveler(this.sharedService.user['_id']).subscribe((theEvents: any) => {
        if (theEvents) {
          this.events = theEvents;
        }
      });
    }
  }
}
