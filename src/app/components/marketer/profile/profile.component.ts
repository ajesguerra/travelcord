import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../../../services/shared.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileMarketerComponent implements OnInit {

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
