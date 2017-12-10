import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user = {};
  loggedIn: boolean;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.loggedIn = false;
    this.user = this.sharedService.user;
    if (this.sharedService.user['_id']) {
      this.loggedIn = true;
    }
  }
}
