import { Component, AfterViewInit } from '@angular/core';

import { UserService } from '../services/user.service';

import { User } from '../models/user'


@Component({
  selector: 'userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserListComponent {
 
  users: Array<User>;

  constructor(private userService: UserService){
    this.getUsers();
  }

  getUsers(){
    this.userService.getConfigResponse()
    // resp is of type `HttpResponse<Config>`
    .subscribe(resp => {
        this.users = resp.body;
      // display its headers
      //const keys = resp.headers.keys();
      //this.headers = keys.map(key =>
        //`${key}: ${resp.headers.get(key)}`);

      // access the body directly, which is typed as `Config`.
      //this.config = { ... resp.body };
    });
  }
}
