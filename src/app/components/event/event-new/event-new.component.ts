import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../services/event.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {TravelerService} from '../../../services/traveler.service.client';

@Component({
  selector: 'app-event-new',
  templateUrl: './event-new.component.html',
  styleUrls: ['./event-new.component.css']
})
export class EventNewComponent implements OnInit {

  travelerId: string;
  events = [{}];
  eventname: string;
  description: string;
  aNewEvent: any;
  errorFlag: boolean;
  errorMsg = 'Those fields cannot be blank.';
  constructor(private travelerService: TravelerService,
              private eventService: EventService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.errorFlag = false;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.travelerId = params['travelerId'];
          this.travelerService.findAllEventsForTraveler(this.travelerId).subscribe((theEvents: any) => {
            if (theEvents) {
              this.events = theEvents;
            }
          });
          this.eventname = '';
          this.description = '';
        }
      );
  }
  createEvent() {
    if (this.eventname === '' || this.description === '') {
      this.errorFlag = true;
    } else {
      this.aNewEvent = {eventName: this.eventname,
        description: this.description};
      this.eventService.createEvent(this.travelerId, this.aNewEvent).subscribe((theEvents: any) => {
        this.router.navigate(['/traveler', this.travelerId, 'event-list']);
      });
    }
  }
}
