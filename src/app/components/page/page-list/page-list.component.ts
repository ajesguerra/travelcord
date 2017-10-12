import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;
  pages = [{}];
  constructor(private pageService: PageService,  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          console.log('user' + this.userId);
          console.log('website' + this.websiteId);
          console.log(params['wid']);
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pages = this.pageService.findPageByWebsiteId(this.websiteId);
        }
      );
  }
}
