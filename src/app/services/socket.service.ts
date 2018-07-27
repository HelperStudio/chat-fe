import { Injectable } from "@angular/core";
import { Message } from "../models/message";
import { User } from "../models/user";

import { IdentityService } from "./identity.service";
import { UserService } from "./user.service";

import { AppConfig } from "../app.config";

import * as io from "socket.io-client";

@Injectable({
  providedIn: "root"
})
export class SocketService {
  socket: any;
  messages: Array<Message>;
  users: Array<User>;

  protected apiServer = AppConfig.settings.apiServer;

  constructor(
    private identityService: IdentityService,
    private userService: UserService
  ) {
    this.messages = [];
    this.users = [];
  }

  initialize() {
    var self = this;
    let user = this.identityService.getCurrentUser();

    this.socket = io.connect(
      this.apiServer.url + "?id=" + user.id + "&name=" + user.name
    );

    this.socket.on("connect", () => {});

    this.socket.on("message", (msg: Message) => {
      console.log("message", msg);
      this.messages.push(msg);
    });

    this.socket.on("online", (user: User) => {
      self.userService.getByIdResponse(user.id).subscribe(resp => {
        if (!self.users.some(x => x.id == user.id)) {
          self.users.push(resp.body.data);
        }
      });
    });

    this.socket.on("offline", (user: User) => {
      console.log("offline", user);
      self.users = self.users.filter(x => x.id != user.id);
    });
  }

  sendMessage(msg: Message) {
    this.socket.emit("message", msg);
  }

  sendUserInfo(user: User) {
    this.socket.emit("userInfo", user);
  }
}
