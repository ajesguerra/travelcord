import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  widgetType: string;
  theWidget: any;
  aNewWidget: {};
  widgetExists: boolean;
  widgetURL: string;
  widgetWidth: string;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.widgetId = params['wgid'];
          this.widgetType = params['wtype'];
          this.theWidget = this.widgetService.findWidgetById(this.widgetId);
          if (this.theWidget) {
            this.widgetURL = this.theWidget['url'];
            this.widgetWidth = this.theWidget['width'];
            this.widgetExists = true;
          }
          // this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
          // this.thePage = this.widgetService.findPageById(this.pageId);
        }
      );
  }

  addData() {
    this.aNewWidget = {_id: this.widgetId, widgetType: this.widgetType, pageId: this.pageId,
    width: this.widgetWidth, url: this.widgetURL};
    this.widgetService.createWidget(this.pageId, this.aNewWidget);
    // console.log(this.aNewWidget);
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }

}
