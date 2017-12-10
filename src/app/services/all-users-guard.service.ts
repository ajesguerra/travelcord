import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {TravelerService} from './traveler.service.client';
import {SharedService} from './shared.service.client';

@Injectable()
export class AllUsersGuardService implements CanActivate {

  constructor(private travelerService: TravelerService,
              private router: Router,
              private sharedService: SharedService) {}

  canActivate() {
    return this.travelerService.loggedIn();
  }
}
