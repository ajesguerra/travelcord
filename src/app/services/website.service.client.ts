import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class WebsiteService {
  websites = [
    { '_id': '123', 'name': 'Facebook',    'developerId': '456', 'description': 'Lorem' },
    { '_id': '234', 'name': 'Tweeter',     'developerId': '456', 'description': 'Lorem' },
    { '_id': '456', 'name': 'Gizmodo',     'developerId': '456', 'description': 'Lorem' },
    { '_id': '890', 'name': 'Go',          'developerId': '123', 'description': 'Lorem' },
    { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
    { '_id': '678', 'name': 'Checkers',    'developerId': '123', 'description': 'Lorem' },
    { '_id': '789', 'name': 'Chess',       'developerId': '234', 'description': 'Lorem' }
  ];
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
