import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {UserService} from './user.service.client';
import {TravelerService} from './traveler.service.client';

@Injectable()
export class AdminServiceClient implements CanActivate {
  constructor(private travelerService: TravelerService) {}
  canActivate() {
    return this.travelerService.isAdmin();
  }
}
