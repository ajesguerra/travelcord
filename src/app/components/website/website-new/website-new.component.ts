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
          this.websiteService.findWebsitesByUser(this.userId).subscribe((websites: any) => {
            this.websites = websites;
          });
          this.websitename = '';
          this.websitedescription = '';
        }
      );
  }
  createWebsite() {
    if (this.websitename === '' || this.websitedescription === '') {
      this.errorFlag = true;
    } else {
      this.aNewWebsite = {developerId: this.userId, name: this.websitename,
        description: this.websitedescription};
      this.websiteService.createWebsite(this.userId, this.aNewWebsite).subscribe((theWebsites: any) => {
        this.router.navigate(['/user', this.userId, 'website']);
      });
    }
  }
}
