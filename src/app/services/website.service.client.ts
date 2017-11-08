import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()
export class WebsiteService {
  baseUrl = environment.baseUrl;
  constructor(private http: Http) {}
  createWebsite(userId, website) {
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.post(url, website).map((response: Response) => {
      return response.json();
    });
  }

  findWebsitesByUser(userId) {
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findWebsiteById(websiteId) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateWebsite(websiteId, website)  {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.put(url, website).map((response: Response) => {
      return response.json();
    });
  }

  deleteWebsite(websiteId) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.delete(url, websiteId).map((response: Response) => {
      return response.json();
    });
  }
}
