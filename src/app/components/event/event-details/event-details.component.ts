import {Component, OnInit} from '@angular/core';
import {EventService} from "../../../services/event.service.client";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event = {};
  eventExists: boolean;
  constructor(private eventService: EventService,
              private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit() {
    this.eventExists = false;
    this.activatedRoute.params
      .subscribe((params: any) => {
        if (params['eventId']) {
          this.eventService.findEventById(params['eventId'])
            .subscribe((event: any) => {
              this.event = event;
              if (event) {
                this.eventExists = true;
              }
            });
        }
      });
  }
}
