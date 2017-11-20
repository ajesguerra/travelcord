import { Component, OnInit } from '@angular/core';
import {TravelerService} from '../../../services/traveler.service.client';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../../../services/event.service.client';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  travelerId: string;
  events: [{}];
  constructor(private travelerService: TravelerService, private eventService: EventService,  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.travelerId = params['travelerId'];
        }
      );
    this.travelerService.findAllEventsForTraveler(this.travelerId).subscribe((theEvents: any) => {
      if (theEvents) {
        this.events = theEvents;
      }
    });
  }
}
