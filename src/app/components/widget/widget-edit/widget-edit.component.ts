import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  widgetType: string;
  doesWidgetExist: boolean;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.doesWidgetExist = false;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.widgetId = params['wgid'];
          this.widgetType = params['wtype'];
          // this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
          // this.thePage = this.widgetService.findPageById(this.pageId);
          if (this.widgetService.findWidgetById(this.widgetId)) {
            this.doesWidgetExist = true;
          }
        }
      );
  }
  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId);
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }
}
