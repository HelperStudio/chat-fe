import { Component, AfterViewInit } from '@angular/core';

import { SocketService } from '../services/socket.service';

import { Message } from '../models/message'
import { IdentityService } from '../services/identity.service';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewInit  {
  text:string;
  socketService: SocketService;
  

  constructor(private _socketService: SocketService, private identityService:IdentityService){
      this.socketService = _socketService;
    this.socketService.initialize();
    
  }

  ngAfterViewInit() {
    var input = document.getElementById("msgInput");
    input.focus();
    }

  

  send(){
      if(this.text){
        var msg = new Message(this.text, this.identityService.getCurrentUser());
        this.socketService.sendMessage(msg);
        this.text = "";
      }
  }

  
}
