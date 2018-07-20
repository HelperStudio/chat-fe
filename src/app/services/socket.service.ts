import { Injectable } from "@angular/core";
import { Message } from "../models/message";
import { User } from "../models/user";

import { IdentityService } from "./identity.service";

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

  constructor(private identityService: IdentityService) {
    this.messages = [];
    this.users = [];
  }

  initialize() {
    var self = this;
    let user = this.identityService.getCurrentUser();

    this.socket = io.connect(
      this.apiServer.url + "?id=" + user.id + "&name=" + user.name
    );

    this.socket.on("connect", () => {
      self.sendUserInfo(user);
    });

    this.socket.on("message", (msg: Message) => {
      console.log("message", msg);
      this.messages.push(msg);
    });

    this.socket.on("userInfo", (user: User) => {
      var index = this.users.findIndex(x => x.id == user.id);
      if (index >= 0) {
        this.users[index] = user;
      } else {
        this.users.push(user);
      }
    });

    this.socket.on("online", (user: User) => {
      this.users.push(user);
    });

    this.socket.on("offline", (user: User) => {
      this.users = this.users.filter(x => x.socketId != user.socketId);
    });
  }

  sendMessage(msg: Message) {
    this.socket.emit("message", msg);
  }

  sendUserInfo(user: User) {
    this.socket.emit("userInfo", user);
  }
}
