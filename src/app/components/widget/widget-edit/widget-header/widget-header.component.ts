import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  widgetType: string;
  theWidget: any;
  aNewWidget: {};
  widgetExists: boolean;
  widgetText: string;
  widgetSize: string;

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
            this.widgetText = this.theWidget['text'];
            this.widgetSize = this.theWidget['size'];
            this.widgetExists = true;
          }
          // this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
          // this.thePage = this.widgetService.findPageById(this.pageId);
        }
      );
  }

  addData() {
    this.aNewWidget = {_id: this.widgetId, widgetType: this.widgetType, pageId: this.pageId, size: this.widgetSize,
      text: this.widgetText };
    this.widgetService.createWidget(this.pageId, this.aNewWidget);
    // console.log(this.aNewWidget);
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }
}
