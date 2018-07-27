import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

import { User } from "../models/user";
import { SuccessResponse } from "../models/successResponse";

import { AppConfig } from "../app.config";

@Injectable({
  providedIn: "root"
})
export class UserService {
  protected apiServer = AppConfig.settings.apiServer;

  constructor(private http: HttpClient) {}

  getListResponse(): Observable<HttpResponse<SuccessResponse<Array<User>>>> {
    return this.http.get<SuccessResponse<Array<User>>>(this.apiServer.url + "/users", {
      observe: "response"
    });
  }

  getByIdResponse(id): Observable<HttpResponse<SuccessResponse<User>>> {
    return this.http.get<SuccessResponse<User>>(this.apiServer.url + "/users/" + id, {
      observe: "response"
    });
  }
}
