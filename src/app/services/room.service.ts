import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

import { Room } from "../models/room";
import { SuccessResponse } from "../models/successResponse";

import { AppConfig } from "../app.config";

@Injectable({
  providedIn: "root"
})
export class RoomService {
  protected apiServer = AppConfig.settings.apiServer;

  constructor(private http: HttpClient) {}

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
}
