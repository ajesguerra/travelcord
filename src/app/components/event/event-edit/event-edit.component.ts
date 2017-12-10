import {Component, OnInit} from '@angular/core';
import {EventService} from '../../../services/event.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {
  event: {};
  eventname: string;
  description: string;
  errorFlag: boolean;
  isEventOwner: boolean;
  errorMsg = 'Those fields cannot be blank.';

  constructor(private eventService: EventService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.isEventOwner = false;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.eventService.findEventById(params['eventId']).subscribe((theEvent: any) => {
            if (theEvent) {
              this.event = theEvent;
              this.eventname = this.event['eventName'];
              this.description = this.event['description'];
              if (this.sharedService.user['_id'] == this.event['owner']['_id']) {
                this.isEventOwner = true;
              }
            }
          });
        }
      );
  }

  updateEvent() {
    this.event['eventName'] = this.eventname;
    this.event['description'] = this.description;
    this.eventService.updateEvent(this.event['_id'], this.event).subscribe((event: any) => {
      window.location.reload();
    });
  }

  removeTravelerFromEvent() {
    this.eventService.removeTravelerFromEvent(this.sharedService.user['_id'], this.event['_id'])
      .subscribe((event: any) => {
        this.router.navigate(['/event-list']);
      });
  }

  deleteEvent() {
    this.eventService.deleteEvent(this.event['_id']).subscribe((event: any) => {
      this.router.navigate(['/main']);
    });
  }
}
