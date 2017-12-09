import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {EventService} from './event.service.client';
import {SharedService} from './shared.service.client';
import {Router} from '@angular/router';

@Injectable()
export class TravelerService {
  options: RequestOptions = new RequestOptions();
  baseUrl = environment.baseUrl;
  constructor(private http: Http,
              private sharedService: SharedService,
              private router: Router) {}

  register(email, password) {
    const url = this.baseUrl + '/api/register';
    const credentials = {
      email: email,
      password: password
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  login(email, password) {
    this.options.withCredentials = true;
    const url = this.baseUrl + '/api/login';
    const credentials = {
      email: email,
      password: password
    };
    return this.http.post(url, credentials, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  loggedIn() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if (user !== 0) {
            this.sharedService.user = user; // setting user so as to share with all components
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
  }

  logout() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/logout', '', this.options)
      .map(
        (res: Response) => {
          const data = res;
        }
      );
  }

  findTravelerByCredentials(email, password) {
    const url = this.baseUrl + '/api/traveler?email=' + email + '&password=' + password;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findAllTravelers() {
    const url = this.baseUrl + '/api/traveler/all';
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
      for (let i = 0; i < response.json().length; i++) {
        const url2 = this.baseUrl + '/api/event/' + response.json()[i];
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

  follow(travelerId, personToFollow) {
    console.log('in traveler service client.  trying to follow..' + personToFollow);
    const url = this.baseUrl + '/api/traveler/' + travelerId + '/follow/' + personToFollow;
    return this.http.post(url, personToFollow).map((response: Response) => {
      return response.json();
    });
  }

  getFollowing(travelerId) {
    const travelersFollowing = [];
    for (let i = 0; i < this.sharedService.user['following'].length; i++) {
      const url = this.baseUrl + '/api/traveler/' + travelerId;
      return this.http.get(url).subscribe((response: Response) => {
        travelersFollowing.push(response.json());
      });
    }
    return travelersFollowing;
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
