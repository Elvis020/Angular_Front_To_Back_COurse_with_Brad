import { User } from './../user/User';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import {of} from 'rxjs/observable/of';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.gmail.com',
        hide: true,
        isActive: true,
        registered: new Date('01/02/2017 08:00:34'),
      },
      {
        firstName: 'Ama',
        lastName: 'Kwakye',
        isActive: false,
        email: 'amakwa@yahoo.com',
        hide: true,
        registered: new Date('02/12/2018 02:40:03'),
      },
      {
        firstName: 'Nurdeen',
        lastName: 'Yahaya',
        email: 'nuru@gmail.com',
        isActive: true,
        hide: true,
        registered: new Date('02/22/2019 10:30:40'),
      },
      {
        firstName: 'John ',
        lastName: 'Doe Snr',
        email: 'john@snr.gmail.com',
        isActive: false,
        hide: true,
        registered: new Date('07/09/2020 22:05:00'),
      }
    ];
  }

  getUsers():Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }

  getData() {
    return this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      setTimeout(() => {
        observer.next(4);
      }, 4000);
      setTimeout(() => {
        observer.next(5);
      }, 5000);
    });

  }
}
