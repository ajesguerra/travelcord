import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class WidgetService {
  constructor(private http: Http) {}
  createWidget(pageId: string, widget: any) {
    widget.pageId = pageId;
    const url = 'http://localhost:3100/api/page/' + pageId + '/widget';
    return this.http.post(url, widget).map((response: Response) => {
      return response.json();
    });
  }

  findWidgetsByPageId(pageId) {
    const url = 'http://localhost:3100/api/page/' + pageId + '/widget';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findWidgetById(widgetId) {
    const url = 'http://localhost:3100/api/widget/' + widgetId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateWidget(widgetId, widget)  {
    const url = 'http://localhost:3100/api/widget/' + widgetId;
    return this.http.put(url, widget).map((response: Response) => {
      return response.json();
    });
  }

  deleteWidget(widgetId) {
    const url = 'http://localhost:3100/api/widget/' + widgetId;
    return this.http.delete(url, widgetId).map((response: Response) => {
      return response.json();
    });
  }
}
