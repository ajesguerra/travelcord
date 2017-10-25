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
            if (this.theWidget !== null) {
              this.widgetText = widget.text;
              this.widgetSize = widget.size;
              this.widgetExists = true;
            } else {
              this.widgetText = '';
              this.widgetSize = '';
              this.widgetExists = false;
            }
          });
        }
      );
  }

  addData() {
    if (this.widgetText === '' || this.widgetSize === '') {
      this.errorFlag = true;
    } else {
      if (!this.widgetExists) {
        this.aNewWidget = {_id: this.widgetId, widgetType: this.widgetType, pageId: this.pageId, size: this.widgetSize,
          text: this.widgetText };
        this.widgetService.createWidget(this.pageId, this.aNewWidget).subscribe((widget: any) => {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        });
      } else {
        this.aNewWidget = {_id: this.widgetId, widgetType: this.widgetType, pageId: this.pageId, size: this.widgetSize,
          text: this.widgetText };
        this.widgetService.updateWidget(this.widgetId, this.aNewWidget).subscribe((widgets: any) => {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        });
      }
    }
  }
}
