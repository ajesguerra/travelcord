import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()
export class SuggestionService {
  baseUrl = environment.baseUrl;
  constructor(private http: Http) {}

  findSuggestionById(suggestionId) {
    const url = this.baseUrl + '/api/suggestion/' + suggestionId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateSuggestion(suggestionId, suggestion)  {
    const url = this.baseUrl + '/api/suggestion/' + suggestionId;
    return this.http.put(url, suggestion).map((response: Response) => {
      return response.json();
    });
  }

  deleteSuggestion(activityId, suggestionId) {
    const url = this.baseUrl + '/api/suggestion/' + activityId + '/' + suggestionId;
    return this.http.delete(url, suggestionId).map((response: Response) => {
      return response.json();
    });
  }

}
