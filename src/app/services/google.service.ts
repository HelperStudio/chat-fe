import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

import { GoogleValidationResult } from "../models/google.validationresult";

import { AppConfig } from "../app.config";

@Injectable({
  providedIn: "root"
})
export class GoogleService {
  constructor(private http: HttpClient) {}

  validateToken(
    accessToken: string
  ): Observable<HttpResponse<GoogleValidationResult>> {
    return this.http.get<GoogleValidationResult>(
      "https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=" +
        accessToken,
      {
        observe: "response"
      }
    );
  }
}
