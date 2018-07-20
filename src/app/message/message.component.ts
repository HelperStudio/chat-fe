import { Component, Input, AfterViewInit } from "@angular/core";
import { ChangeDetectorRef } from "@angular/core";

import { Message } from "../models/message";

import { IdentityService } from "./../services/identity.service";
import { User } from "../models/user";
import { SocketService } from "../services/socket.service";

@Component({
  selector: "message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})
export class MessageComponent implements AfterViewInit {
  @Input() message: Message;
  container: HTMLElement;
  identityService: IdentityService;
  user: User;

  constructor(
    private _identityService: IdentityService,
    private _socketService: SocketService,
    private cdRef: ChangeDetectorRef
  ) {
    this.identityService = _identityService;
  }

  ngAfterViewInit() {
    this.container = document.getElementById("msgContainer");
    this.container.scrollTop = this.container.scrollHeight;
  }

  ngAfterViewChecked() {
    if (!this.user) {
      var user = this._socketService.users.filter(
        x => x.id == this.message.from
      );
      if (user.length > 0) {
        this.user = user[0];
      } else {
        this.user = null;
      }
    }
    this.cdRef.detectChanges();
  }
}
