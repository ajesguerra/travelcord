import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {TravelerService} from './traveler.service.client';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private travelerService: TravelerService,
              private router: Router) {}

  canActivate() {
    return this.travelerService.loggedIn();
  }
}
