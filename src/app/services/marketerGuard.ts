import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {MarketerService} from './marketer.service.client';

@Injectable()
export class MarketerGuard implements CanActivate {

  constructor(private marketerService: MarketerService,
              private router: Router) {}

  canActivate() {
    return this.marketerService.loggedIn();
  }
}
