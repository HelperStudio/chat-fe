import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Room } from "../models/room";
import { SuccessResponse } from "../models/successResponse";
import {IdentityService} from "./identity.service";
import { AppConfig } from "../app.config";


@Injectable({
  providedIn: "root"
})
export class RoomService {
  protected apiServer = AppConfig.settings.apiServer;

  constructor(
      private http: HttpClient,
    private identityService: IdentityService) {}

  getListResponse(): Observable<HttpResponse<SuccessResponse<Array<Room>>>> {
    return this.http.get<SuccessResponse<Array<Room>>>(this.apiServer.url + "/rooms", {
      observe: "response"
    });
  }

  getByIdResponse(id): Observable<HttpResponse<SuccessResponse<Room>>> {
    return this.http.get<SuccessResponse<Room>>(this.apiServer.url + "/rooms/" + id, {
      observe: "response"
    });
  }

  createRoomResponse(room:Room){
    let httpHeaders = new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": this.identityService.getCurrentUserToken().accessToken
      });
  
      return this.http.post<SuccessResponse<string>>(this.apiServer.url + "/rooms", room, {
        headers: httpHeaders,
        observe: "response"
      });
  }

  deleteRoomResponse(room:Room){
    let httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": this.identityService.getCurrentUserToken().accessToken
    });

    return this.http.delete<SuccessResponse<object>>(this.apiServer.url + "/rooms/" + room.id, {
      headers: httpHeaders,
      observe: "response"
    });
  }
}
