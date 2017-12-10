import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()
export class PromotionService {
  baseUrl = environment.baseUrl;

  constructor(private http: Http) {
  }

  createPromotion(travelerId, promotion) {
    const url = this.baseUrl + '/api/promotion/' + travelerId + '/newPromotion';
    return this.http.post(url, promotion).map((response: Response) => {
      console.log('back from server');
      console.log(response.json());
      return response.json();
    });
  }

  findPromotionById(promotionId) {
    const url = this.baseUrl + '/api/promotion/' + promotionId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updatePromotion(promotion) {
    const url = this.baseUrl + '/api/promotion/update';
    return this.http.put(url, promotion).map((response: Response) => {
      return response.json();
    });
  }

  deletePromotion(promotionId, travelerId) {
    const url = this.baseUrl + '/api/promotion/delete/' + promotionId + '/' + travelerId;
    return this.http.delete(url, promotionId).map((response: Response) => {
      return response.json();
    });
  }
}
