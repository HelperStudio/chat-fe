// src/app/auth/auth-guard.service.ts
import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { IdentityService } from "../services/identity.service";
import { HttpParams, HttpRequest } from "@angular/common/http";
import { AppConfig } from "../app.config";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public identityService: IdentityService, public router: Router) {}
  canActivate(): boolean {
    if (!this.identityService.getCurrentUser()) {
      let params = {
        client_id: AppConfig.settings.google.client_id,
        redirect_uri: AppConfig.settings.google.redirect_uris[0],
        response_type: "code",
        access_type: "offline",
        scope: "https://www.googleapis.com/auth/plus.me",
        include_granted_scopes: "true"
      };

      let httpParams = new HttpParams({
        fromObject: params
      });

      var request = new HttpRequest("GET", AppConfig.settings.google.auth_uri, {
        params: httpParams
      });
      window.location.assign(request.urlWithParams);
      return false;
    }
    return true;
  }
}
