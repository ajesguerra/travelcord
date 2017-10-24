import {Component, OnInit} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  userId: string;
  websiteId: string;
  websites = [{}];
  websitename: string;
  websitedescription: string;
  aNewWebsite: any;
  errorFlag: boolean;
  errorMsg = 'Those fields cannot be blank.';

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.errorFlag = false;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteService.findWebsitesByUser(this.userId).subscribe((websites: any) => {
            this.websites = websites;
          });
          this.websiteId = params['wid'];
          this.websiteService.findWebsiteById(this.websiteId).subscribe((website: any) => {
            this.websitename = website.name;
            this.websitedescription = website.description;
          });
        }
      );
  }

  editWebsite() {
    if (this.websitename === '' || this.websitedescription === '') {
      this.errorFlag = true;
    } else {
      this.aNewWebsite = {
        _id: this.websiteId, name: this.websitename,
        developerId: this.userId, description: this.websitedescription
      };
      this.websiteService.updateWebsite(this.websiteId, this.aNewWebsite).subscribe((website: any) => {
        this.router.navigate(['/user/', this.userId, 'website']);
      });
    }
  }
  deleteWebsite() {
    this.websiteService.deleteWebsite(this.websiteId).subscribe((websiteDeleted: any) => {
      this.router.navigate(['/user/', this.userId, 'website']);
    });
  }

}
