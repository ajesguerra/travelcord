import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../services/event.service.client';

@Component({
  selector: 'app-event-browse',
  templateUrl: './event-browse.component.html',
  styleUrls: ['./event-browse.component.css']
})
export class EventBrowseComponent implements OnInit {

  events = [{}];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.findAllEvents().subscribe((events: any) => {
      this.events = events;
    });
  }
}
