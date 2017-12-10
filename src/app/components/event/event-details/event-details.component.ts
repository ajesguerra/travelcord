import {Component, OnInit} from '@angular/core';
import {EventService} from '../../../services/event.service.client';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event = {};
  eventExists: boolean;
  showEdit: boolean;
  isEventOwner: boolean;
  isLoggedIn: boolean;
  constructor(private eventService: EventService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.isLoggedIn = false;
    this.showEdit = false;
    this.eventExists = false;
    this.activatedRoute.params
      .subscribe((params: any) => {
        if (params['eventId']) {
          this.eventService.findEventById(params['eventId'])
            .subscribe((event: any) => {
              this.event = event;
              if (event) {
                this.eventExists = true;
                if (this.sharedService.user['_id'] == this.event['owner']['_id']) {
                  this.isEventOwner = true;
                }
              }
            });
        }
      });
    if (this.sharedService.user['_id']) {
      this.isLoggedIn = true;
    }
  }
}
