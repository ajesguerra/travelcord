import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class UserService {
  users = [
    {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
    {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
    {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia'},
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi'}
  ];
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
