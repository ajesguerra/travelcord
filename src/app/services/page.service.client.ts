import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PageService {
  constructor(private http: Http) {}
  createPage(websiteId, page) {
    const url = 'http://localhost:3100/api/website/' + websiteId + '/page';
    return this.http.post(url, page).map((response: Response) => {
      return response.json();
    });
  }

  findPageByWebsiteId(websiteId) {
    const url = 'http://localhost:3100/api/website/' + websiteId + '/page';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findPageById(pageId) {
    const url = 'http://localhost:3100/api/page/' + pageId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updatePage(pageId, page)  {
    const url = 'http://localhost:3100/api/page/' + pageId;
    return this.http.put(url, page).map((response: Response) => {
      return response.json();
    });
  }

  deletePage(pageId) {
    const url = 'http://localhost:3100/api/page/' + pageId;
    return this.http.delete(url, pageId).map((response: Response) => {
      return response.json();
    });
  }
}
