import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {EventService} from './event.service.client';

@Injectable()
export class TravelerService {
  baseUrl = environment.baseUrl;
  constructor(private http: Http) {}

  findTravelerByCredentials(email, password) {
    const url = this.baseUrl + '/api/traveler?email=' + email + '&password=' + password;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  createTraveler(traveler: any) {
    const url = this.baseUrl + '/api/traveler/';
    return this.http.post(url, traveler).map((response: Response) => {
      return response.json();
    });
  }

  findAllEventsForTraveler(travelerId) {
    const url = this.baseUrl + '/api/traveler/' + travelerId + '/event';
    const events = [];
    // Get the traveler
    return this.http.get(url).map((response: Response) => {
      // For each event in the traveler's profile, send another HTTP request to get the event details.
      for (let i = 0; i < response.json().events.length; i++) {
        const url2 = this.baseUrl + '/api/event/' + response.json().events[i];
        this.http.get(url2).subscribe((response2: Response) => {
          events.push(response2.json());
        });
      }
      return events;
    });
  }

  findTravelerById(travelerId: string) {
    const url = this.baseUrl + '/api/traveler/' + travelerId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findTravelerByEmail(email: string) {
    const url = this.baseUrl + '/api/traveler?email=' + email;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateTraveler(travelerId, traveler) {
    const url = this.baseUrl + '/api/traveler/' + travelerId;
    return this.http.put(url, traveler).map((response: Response) => {
      return response.json();
    });
  }

  deleteTraveler(traveler) {
    const url = this.baseUrl + '/api/traveler/' + traveler._id;
    return this.http.delete(url, traveler).map((response: Response) => {
      return response.json();
    });
  }
}
