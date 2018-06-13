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
  constructor(
    private userService: UserService,
    private socketService: SocketService
  ) {
    this.getUsers();
  }

  getUsers() {
    this.userService
      .getConfigResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        this.socketService.users = resp.body;
        // display its headers
        //const keys = resp.headers.keys();
        //this.headers = keys.map(key =>
        //`${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        //this.config = { ... resp.body };
      });
  }
}
