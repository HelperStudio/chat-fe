import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

import { User } from "../models/user";

import { IdentityService } from "./identity.service";

import { AppConfig } from "../app.config";

import * as io from "socket.io-client";

@Injectable({
  providedIn: "root"
})
export class UserService {
  protected apiServer = AppConfig.settings.apiServer;

  constructor(private http: HttpClient) {}

  getConfigResponse(): Observable<HttpResponse<Array<User>>> {
    return this.http.get<Array<User>>(this.apiServer.url + "/users", {
      observe: "response"
    });
  }
}
