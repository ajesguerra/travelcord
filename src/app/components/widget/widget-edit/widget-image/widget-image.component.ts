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
  errorFlag: boolean;
  errorMsg = 'Those fields cannot be blank.';
  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.errorFlag = false;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.widgetId = params['wgid'];
          this.widgetType = params['wtype'];
          this.widgetService.findWidgetById(this.widgetId).subscribe((widget: any) => {
            this.theWidget = widget;
            if (this.theWidget) {
              this.widgetURL = this.theWidget['url'];
              this.widgetWidth = this.theWidget['width'];
              this.widgetExists = true;
            } else {
              this.widgetURL = '';
              this.widgetWidth = '';
              this.widgetExists = false;
            }
          });
        }
      );
  }

  addData() {
    if (this.widgetURL === '' || this.widgetWidth === '') {
      this.errorFlag = true;
    } else {
      this.aNewWidget = {_id: this.widgetId, widgetType: this.widgetType, pageId: this.pageId,
        width: this.widgetWidth, url: this.widgetURL};
      if (this.widgetExists) {
        this.widgetService.updateWidget(this.widgetId, this.aNewWidget).subscribe((widget: any) => {});
      } else {
        this.widgetService.createWidget(this.pageId, this.aNewWidget).subscribe((widget: any) => {});
      }
      // console.log(this.aNewWidget);
      this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    }
  }

}
