import { Component, AfterViewInit } from "@angular/core";

import { UserService } from "../services/user.service";
import { SocketService } from "../services/socket.service";

import { User } from "../models/user";

@Component({
  selector: "userlist",
  templateUrl: "./userlist.component.html",
  styleUrls: ["./userlist.component.css"]
})
export class UserListComponent {
  socketService: SocketService;

  constructor(
    private userService: UserService,
    private _socketService: SocketService
  ) {
    this.socketService = _socketService;
    this.getUsers();
  }

  getUsers() {
    this.userService
      .getListResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        this.socketService.users = resp.body.data;
        // display its headers
        //const keys = resp.headers.keys();
        //this.headers = keys.map(key =>
        //`${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        //this.config = { ... resp.body };
      });
  }
}
