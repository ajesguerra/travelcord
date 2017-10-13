import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

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
