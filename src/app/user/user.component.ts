import { DataService } from './../service/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user/User';
import 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    registered: new Date(),
  };


  users: User[];
  showExtended = true;
  loaded = false;
  enableAdd = true;
  showUserForm = false;
  @ViewChild('userForm') form: any;
  data: any;



  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getData().subscribe( data => {
      console.log(data);
    });

    this.dataService.getUsers().subscribe((users) => {
      this.users = users;
      this.loaded = true;
    });

    this.showExtended = true;


  }

  toggleMe(users: User) {
    users.hide = !users.hide;
  }


  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
      console.error('Something is wrong with the form');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.dataService.addUser(value);
      this.form.reset();


    }

  }



}
