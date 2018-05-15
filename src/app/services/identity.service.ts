import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IdentityService {

    user:string;

  constructor() {
    this.user = localStorage.getItem('user');
  }

  getCurrentUser():string{
    return this.user;
  }

  setCurrentUser(user:string){
    localStorage.setItem('user', user);
    this.user = user;
  }

}