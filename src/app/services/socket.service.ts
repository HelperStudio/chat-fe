import { Injectable } from '@angular/core';
import { Message } from '../models/message';

import { IdentityService } from './identity.service';

import { AppConfig } from '../app.config';

import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})


export class SocketService {

    socket: any;
    messages: Array<Message>;
    protected apiServer = AppConfig.settings.apiServer;

    constructor(private identityService: IdentityService) {
        this.messages = [];
    }

    initialize() {
    
        this.socket = io.connect(this.apiServer.url + "?id=" + this.identityService.user);

        this.socket.on('message', (msg: Message) => {
            this.messages.push(msg);
        });
    }

    sendMessage(msg:Message){
        this.socket.emit("message", msg);
    }

}