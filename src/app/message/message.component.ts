import { Component, Input, AfterViewInit } from '@angular/core';

import {Message} from '../models/message'

import { IdentityService } from './../services/identity.service';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements AfterViewInit{
    @Input() message: Message;
    container: HTMLElement;
    identityService: IdentityService;
    
    constructor(private _identityService: IdentityService){
        this.identityService = _identityService;
    }

    ngAfterViewInit() {
        this.container = document.getElementById("msgContainer");
        this.container.scrollTop = this.container.scrollHeight;
    }
    
}
