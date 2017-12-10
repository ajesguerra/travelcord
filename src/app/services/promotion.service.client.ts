import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()
export class PromotionService {
  baseUrl = environment.baseUrl;
  constructor(private http: Http) {}

  createPromotion(travelerId, promotion) {
    const url = this.baseUrl + '/api/promotion/' + travelerId + '/newPromotion';
    return this.http.post(url, promotion).map((response: Response) => {
      console.log('back from server');
      console.log(response.json());
      return response.json();
    });
  }

  findAllActivitiesForEvent(eventId) {
    const url = this.baseUrl + '/api/activity/' + eventId + '/allActivities';
    const activities = [];
    return this.http.get(url).map((response: Response) => {
      for (let i = 0; i < response.json().length; i++) {
        const url2 = this.baseUrl + '/api/activity/' + response.json()[i];
        this.http.get(url2).subscribe((response2: Response) => {
          activities.push(response2.json());
        });
      }
      return activities;
    });
  }

  findActivityById(activityId) {
    const url = this.baseUrl + '/api/activity/' + activityId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  addSuggestion(activityId, suggestion) {
    const url = this.baseUrl + '/api/suggestion/' + activityId;
    return this.http.post(url, suggestion).map((response: Response) => {
      return response.json();
    });
  }

  findAllSuggestionsForActivity(activityId) {
    const url = this.baseUrl + '/api/activity/' + activityId;
    return this.http.get(url).map((response: Response) => {
      return response.json().activitySuggestions;
    });
  }

  upVote(travelerId, suggestionId) {
    const url = this.baseUrl + '/api/suggestion/upvote/' + suggestionId + '/' + travelerId;
    return this.http.post(url, suggestionId).map((response: Response) => {
      return response.json();
    });
  }

  unVote(travelerId, suggestionId) {
    const url = this.baseUrl + '/api/suggestion/unvote/' + suggestionId + '/' + travelerId;
    return this.http.post(url, suggestionId).map((response: Response) => {
      return response.json();
    });
  }

  markAsDecided(activityId, suggestionId) {
    const url = this.baseUrl + '/api/activity/' + activityId + '/markDecision/' + suggestionId;
    return this.http.post(url, suggestionId).map((response: Response) => {
      return response.json();
    });
  }

  updateActivity(activityId, activity)  {
    const url = this.baseUrl + '/api/activity/' + activityId;
    return this.http.put(url, activity).map((response: Response) => {
      return response.json();
    });
  }

  deleteActivity(activityId) {
    const url = this.baseUrl + '/api/activity/' + activityId;
    return this.http.delete(url, activityId).map((response: Response) => {
      return response.json();
    });
  }
}
