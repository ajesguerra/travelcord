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
  theWebsite: {};
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
          this.websites = this.websiteService.findWebsitesByUser(this.userId);
          this.websiteId = params['wid'];
          this.theWebsite = this.websiteService.findWebsiteById(this.websiteId);
          this.websitename = this.theWebsite['name'];
          this.websitedescription = this.theWebsite['description'];
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
      this.websiteService.updateWebsite(this.websiteId, this.aNewWebsite);
      this.router.navigate(['/user/', this.userId, 'website']);
    }
  }
  deleteWebsite() {
    this.websiteService.deleteWebsite(this.websiteId);
    this.router.navigate(['/user/', this.userId, 'website']);
  }

}
