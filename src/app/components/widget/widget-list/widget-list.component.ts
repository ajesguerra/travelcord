import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;
  widgets = [{}];
  theWidth: string;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute,
              private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.widgetService.findWidgetsByPageId(this.pageId).subscribe((widgets: any) => {
            this.widgets = widgets;
          });
        }
      );
  }

  cleanURL(url: any) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
  assignWidth(aWidth: string) {
    this.theWidth = aWidth;
  }

}
