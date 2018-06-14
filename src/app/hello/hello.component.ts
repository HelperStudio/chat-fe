import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { IdentityService } from "../services/identity.service";
import { HttpClient, HttpParams, HttpRequest } from "@angular/common/http";
import { AppConfig } from "../app.config";

@Component({
  selector: "hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.css"]
})
export class HelloComponent {
  name: string;

  constructor(
    private identityService: IdentityService,
    private route: Router,
    private http: HttpClient
  ) {
    let params = {
      client_id: AppConfig.settings.google.client_id,
      redirect_uri: AppConfig.settings.google.redirect_uris[0],
      response_type: "token",
      scope: "https://www.googleapis.com/auth/drive.metadata.readonly",
      include_granted_scopes: "true",
      state: "pass-through value"
    };

    let httpParams = new HttpParams({
      fromObject: params
    });

    var request = new HttpRequest("GET", AppConfig.settings.google.auth_uri, {
      params: httpParams
    });

    window.location.assign(request.urlWithParams);
  }

  identify() {
    this.identityService.setCurrentUser(this.name);
    this.route.navigate(["/chat"]);
  }
}
