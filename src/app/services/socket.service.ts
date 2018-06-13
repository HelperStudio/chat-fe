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
    this.socket = io.connect(
      this.apiServer.url + "?id=" + this.identityService.user
    );

    this.socket.on("message", (msg: Message) => {
      this.messages.push(msg);
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
}
