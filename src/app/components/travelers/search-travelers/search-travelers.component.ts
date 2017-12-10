import {Component, OnInit} from '@angular/core';
import {TravelerService} from '../../../services/traveler.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../../services/event.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-search-travelers',
  templateUrl: './search-travelers.component.html',
  styleUrls: ['./search-travelers.component.css']
})
export class SearchTravelersComponent implements OnInit {
  searchTerm: string;
  userSearched: boolean;
  travelerSearchedFor: any;
  event: {};
  canAddToEvent: boolean;
  firstNameExists: boolean;
  lastNameExists: boolean;

  constructor(private travelerService: TravelerService,
              private eventService: EventService,
              private sharedService: SharedService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.userSearched = false;
    this.canAddToEvent = false;
    this.firstNameExists = false;
    this.lastNameExists = false;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          if (params['eventId']) {
            this.eventService.findEventById(params['eventId']).subscribe((event: any) => {
              this.event = event;
            });
          }
        }
      );
  }

  findUser() {
    this.travelerService.findTravelerByEmail(this.searchTerm).subscribe((traveler: any) => {
      this.travelerSearchedFor = traveler;
      if (this.travelerSearchedFor['firstName']) {
        this.firstNameExists = true;
      }
      if (this.travelerSearchedFor['lastName']) {
        this.lastNameExists = true;
      }
      this.userSearched = true;
      if (this.event) {
        this.canAddToEvent = true;
      }
    });
  }

  addUserToEvent() {
    this.eventService.addTravelerToEvent(this.travelerSearchedFor['_id'], this.event['_id']).subscribe((event: any) => {
      window.location.reload();
    });
  }

  follow(personToFollow) {
    this.travelerService.follow(this.sharedService.user['_id'], personToFollow)
      .subscribe((traveler: any) => {
        window.location.reload();
      });
  }
}
