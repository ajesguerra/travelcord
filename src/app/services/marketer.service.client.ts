import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {TravelerService} from './traveler.service.client';
import {SharedService} from './shared.service.client';

@Injectable()
export class MarketerServiceClient implements CanActivate {
  constructor(private travelerService: TravelerService,
              private sharedService: SharedService) {}
  canActivate() {
    return (this.travelerService.loggedIn()
      && this.travelerService.isMarketer());
  }
}
