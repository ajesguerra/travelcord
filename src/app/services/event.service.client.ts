import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()
export class EventService {
  baseUrl = environment.baseUrl;
  constructor(private http: Http) {}
  createEvent(travelerId, event) {
    const url = this.baseUrl + '/api/event/' + travelerId + '/newevent';
    return this.http.post(url, event).map((response: Response) => {
      return response.json();
    });
  }

  findAllEvents() {
    const url = this.baseUrl + '/api/event/findAllEvents';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findAllEventsForTraveler(travelerId) {
    const url = this.baseUrl + '/api/traveler/' + travelerId + '/event';
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

  addTravelerToEvent(travelerId, eventId) {
    const url = this.baseUrl + '/api/event/addTraveler/' + eventId + '/' + travelerId;
    return this.http.post(url, event).map((response: Response) => {
      return response.json();
    });
  }
}
