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
          this.pageService.findPageByWebsiteId(this.websiteId).subscribe((websites: any) => {
            this.pages = websites;
          });
          this.pageService.findPageById(this.pageId).subscribe((page: any) => {
            this.thePage = page;
            this.name = this.thePage['name'];
            this.description = this.thePage['description'];
          });
        }
      );
  }
  editPage() {
    if (this.name === '' || this.description === '') {
      this.errorFlag = true;
    } else {
      this.aNewPage = {
        _id: this.pageId, name: this.name, websiteId: this.websiteId, description: this.description};
      this.pageService.updatePage(this.pageId, this.aNewPage).subscribe((page: any) => {
        this.router.navigate(['/user/', this.userId, 'website', this.websiteId, 'page']);
      });
    }
  }
  deletePage() {
    this.pageService.deletePage(this.pageId).subscribe((page: any) => {
      this.router.navigate(['/user/', this.userId, 'website', this.websiteId, 'page']);
    });
  }
}
