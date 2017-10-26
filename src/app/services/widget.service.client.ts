import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()
export class WidgetService {
  baseUrl = environment.baseUrl;
  constructor(private http: Http) {}
  createWidget(pageId: string, widget: any) {
    widget.pageId = pageId;
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    return this.http.post(url, widget).map((response: Response) => {
      return response.json();
    });
  }

  findWidgetsByPageId(pageId) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findWidgetById(widgetId) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateWidget(widgetId, widget)  {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.put(url, widget).map((response: Response) => {
      return response.json();
    });
  }

  deleteWidget(widgetId) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.delete(url, widgetId).map((response: Response) => {
      return response.json();
    });
  }
}
