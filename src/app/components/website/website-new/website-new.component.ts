import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  userId: string;
  websites = [{}];
  websitename: string;
  websitedescription: string;
  aNewWebsite: any;
  errorFlag: boolean;
  errorMsg = 'Those fields cannot be blank.';
  constructor(private websiteService: WebsiteService,  private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.errorFlag = false;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websites = this.websiteService.findWebsitesByUser(this.userId);
          this.websitename = '';
          this.websitedescription = '';
        }
      );
  }
  createWebsite() {
    if (this.websitename === '' || this.websitedescription === '') {
      this.errorFlag = true;
    } else {
      this.aNewWebsite = {_id: Math.random().toString(), name: this.websitename,
        developerId: this.userId, description: this.websitedescription};
      this.websiteService.createWebsite(this.userId, this.aNewWebsite);
      this.router.navigate(['/user/', this.userId, 'website']);
    }
  }
}
