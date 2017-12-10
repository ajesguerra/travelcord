import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {SharedService} from './shared.service.client';
import {Router} from '@angular/router';

@Injectable()
export class MarketerService {
  options: RequestOptions = new RequestOptions();
  baseUrl = environment.baseUrl;
  constructor(private http: Http,
              private sharedService: SharedService,
              private router: Router) {}

  register(email, password) {
    const url = this.baseUrl + '/api/register/marketer';
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
    console.log('in client service marketer');
    this.options.withCredentials = true;
    const url = this.baseUrl + '/api/login/marketer';
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
    return this.http.post(this.baseUrl + '/api/loggedIn/marketer', '', this.options)
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
    return this.http.post(this.baseUrl + '/api/logout/marketer', '', this.options)
      .map(
        (res: Response) => {
          const data = res;
        }
      );
  }

  findMarketerByCredentials(email, password) {
    const url = this.baseUrl + '/api/marketer?email=' + email + '&password=' + password;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findAllMarketers() {
    const url = this.baseUrl + '/api/marketer/all';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  createMarketer(marketer: any) {
    const url = this.baseUrl + '/api/marketer/';
    return this.http.post(url, marketer).map((response: Response) => {
      return response.json();
    });
  }

  findAllEventsForMarketer(marketerId) {
    const url = this.baseUrl + '/api/marketer/' + marketerId + '/event';
    const events = [];
    // Get the marketer
    return this.http.get(url).map((response: Response) => {
      // For each event in the marketer's profile, send another HTTP request to get the event details.
      for (let i = 0; i < response.json().length; i++) {
        const url2 = this.baseUrl + '/api/event/' + response.json()[i];
        this.http.get(url2).subscribe((response2: Response) => {
          events.push(response2.json());
        });
      }
      return events;
    });
  }

  findMarketerById(marketerId) {
    const url = this.baseUrl + '/api/marketer/' + marketerId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findMarketerByEmail(email: string) {
    const url = this.baseUrl + '/api/marketer?email=' + email;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  follow(marketerId, personToFollow) {
    const url = this.baseUrl + '/api/marketer/' + marketerId + '/follow/' + personToFollow;
    return this.http.post(url, personToFollow).map((response: Response) => {
      return response.json();
    });
  }
  updateMarketer(marketerId, marketer) {
    const url = this.baseUrl + '/api/marketer/' + marketerId;
    return this.http.put(url, marketer).map((response: Response) => {
      return response.json();
    });
  }

  deleteMarketer(marketer) {
    const url = this.baseUrl + '/api/marketer/' + marketer._id;
    return this.http.delete(url, marketer).map((response: Response) => {
      return response.json();
    });
  }
}
