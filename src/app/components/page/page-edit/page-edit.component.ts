import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';

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
  constructor(private pageService: PageService,  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.pages = this.pageService.findPageByWebsiteId(this.websiteId);
          this.thePage = this.pageService.findPageById(this.pageId);
        }
      );
  }

}
