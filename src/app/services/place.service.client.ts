import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()
export class PlaceService {
  baseUrl = environment.baseUrl;
  constructor(private http: Http) {}

  placesAutoComplete(searchTerm: any) {
    const url = this.baseUrl + '/api/places/placesAutoComplete/' + searchTerm ;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  moreDetails(placeid: any) {
    const url = this.baseUrl + '/api/places/details/' + placeid;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }
}
