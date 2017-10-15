import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;
  pages = [{}];
  thePage = {};
  name: string;
  description: string;
  aNewPage: any;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';
  constructor(private pageService: PageService,  private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.errorFlag = false;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.pages = this.pageService.findPageByWebsiteId(this.websiteId);
          this.thePage = this.pageService.findPageById(this.pageId);
          this.name = this.thePage['name'];
          this.description = this.thePage['description'];
        }
      );
  }
  editPage() {
    if (this.name === '' || this.description === '') {
      this.errorFlag = true;
    } else {
      this.aNewPage = {
        _id: this.pageId, name: this.name, websiteId: this.websiteId, description: this.description};
      this.pageService.updatePage(this.pageId, this.aNewPage);
      this.router.navigate(['/user/', this.userId, 'website', this.websiteId, 'page']);
    }
  }

}
