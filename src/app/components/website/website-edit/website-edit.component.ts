import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  userId: string;
  websiteId: string;
  theWebsite: {};
  websites = [{}];
  constructor(private websiteService: WebsiteService,  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websites = this.websiteService.findWebsitesByUser(this.userId);
          this.websiteId = params['wid'];
          this.theWebsite = this.websiteService.findWebsiteById(this.websiteId);
        }
      );

  }

}
