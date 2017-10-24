import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class UserService {
  constructor(private http: Http) {}

  findUserByCredentials(username, password) {
    const url = 'http://localhost:3100/api/user?username=' + username + '&password=' + password;
    return this.http.get(url).map((response: Response) => {
        return response.json();
    });
  }
  createUser(user: any) {
    const url = 'http://localhost:3100/api/user/';
    return this.http.post(url, user).map((response: Response) => {
      return response.json();
    });
  }

  findUserById(userId: string) {
    const url = 'http://localhost:3100/api/user/' + userId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findUserByUsername(username: string) {
    const url = 'http://localhost:3100/api/user?username=' + username;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateUser(userId, user) {
    const url = 'http://localhost:3100/api/user/' + userId;
    return this.http.put(url, user).map((response: Response) => {
      return response.json();
    });
  }
  deleteUser(user) {
    const url = 'http://localhost:3100/api/user/' + user._id;
    return this.http.delete(url, user).map((response: Response) => {
      return response.json();
    });
  }
}
