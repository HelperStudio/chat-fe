import { Component } from '@angular/core';
import {Router} from '@angular/router';

import { SocketService } from '../services/socket.service';
import { IdentityService } from '../services/identity.service';

import { Message } from '../models/message'


@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  name:string;

  constructor(private identityService:IdentityService, private route:Router){
    
  }

  identify(){
      this.identityService.setCurrentUser(this.name);
      this.route.navigate(['/chat']);
  }

}
