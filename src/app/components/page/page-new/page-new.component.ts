import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  userId: string;
  websiteId: string;
  name: string;
  description: string;
  pages = [{}];
  aNewPage: any;
  errorFlag: boolean;
  errorMsg = 'Those fields cannot be blank.';
  constructor(private pageService: PageService,  private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.errorFlag = false;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageService.findPageByWebsiteId(this.websiteId).subscribe((page: any) => {
            this.pages = page;
          });
          this.name = '';
          this.description = '';
        }
      );
  }
  createPage() {
    if (this.name === '' || this.description === '') {
      this.errorFlag = true;
    } else {
      this.aNewPage = {_id: Math.random().toString(), name: this.name,
        websiteId: this.websiteId, description: this.description};
      this.pageService.createPage(this.websiteId, this.aNewPage).subscribe((page: any) => {
        this.router.navigate(['/user/', this.userId, 'website', this.websiteId, 'page']);
      });
    }
  }
}
