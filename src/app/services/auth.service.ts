import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { SuccessResponse } from "../models/successResponse";
import { Auth } from "../models/auth";

import { AppConfig } from "../app.config";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  protected apiServer = AppConfig.settings.apiServer;

  constructor(private http: HttpClient) {}

  exchangeCode(code): Observable<HttpResponse<SuccessResponse<Auth>>> {
    let httpHeaders = new HttpHeaders({
      "Content-Type": "application/json"
    });

    let model = {
      code: code
    };

    return this.http.post<SuccessResponse<Auth>>(this.apiServer.url + "/auth/code", model, {
      headers: httpHeaders,
      observe: "response"
    });
  }
}
