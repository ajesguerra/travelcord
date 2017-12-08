import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()
export class ActivitiesService {
  baseUrl = environment.baseUrl;
  constructor(private http: Http) {}
  createEvent(travelerId, event) {
    const url = this.baseUrl + '/api/event/' + travelerId + '/newevent';
    return this.http.post(url, event).map((response: Response) => {
      return response.json();
    });
  }

  findAllActivitiesForEvent(eventId) {
    const url = this.baseUrl + '/api/event/' + eventId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findEventById(eventId) {
    const url = this.baseUrl + '/api/event/' + eventId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateEvent(eventId, event)  {
    const url = this.baseUrl + '/api/event/' + eventId;
    return this.http.put(url, event).map((response: Response) => {
      return response.json();
    });
  }

  deleteEvent(eventId) {
    const url = this.baseUrl + '/api/event/' + eventId;
    return this.http.delete(url, eventId).map((response: Response) => {
      return response.json();
    });
  }
}
