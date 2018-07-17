import { Injectable } from "@angular/core";
import { Token } from "../models/token";
import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class IdentityService {

  constructor() {
  }

  getCurrentUser(): User {
    return JSON.parse(localStorage.getItem("user"));
  }

  setCurrentUser(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  setCurrentUserToken(token: Token) {
    localStorage.setItem("token", JSON.stringify(token));
  }

  getCurrentUserToken(): Token {
    return JSON.parse(localStorage.getItem("token"));
  }

  getAuth(): string {
    return JSON.parse(localStorage.getItem("user"));
  }

  setAuth(user: string) {
    localStorage.setItem("user", user);
  }
}
