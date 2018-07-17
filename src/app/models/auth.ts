import { Token } from "./token";
import { User } from "./user";

export class Auth {
  token: Token;
  user: User;

  constructor(token: Token, user: User) {
    this.token = token;
    this.user = user;
  }
}
