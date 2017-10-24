import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WebsiteService {
  constructor(private http: Http) {}
  createWebsite(userId, website) {
    website.developerId = userId;
    const url = 'http://localhost:3100/api/user/' + userId + '/website';
    return this.http.post(url, website).map((response: Response) => {
      return response.json();
    });
  }

  findWebsitesByUser(userId) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findWebsiteById(websiteId) {
    const url = 'http://localhost:3100/api/website/' + websiteId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateWebsite(websiteId, website)  {
    const url = 'http://localhost:3100/api/website/' + websiteId;
    return this.http.put(url, website).map((response: Response) => {
      return response.json();
    });
  }

  deleteWebsite(websiteId) {
    const url = 'http://localhost:3100/api/website/' + websiteId;
    return this.http.put(url, websiteId).map((response: Response) => {
      return response.json();
    });
  }
}
