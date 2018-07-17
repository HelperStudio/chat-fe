import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { AuthService } from "../services/auth.service";
import { IdentityService } from "../services/identity.service";

@Component({
  selector: "oauh2callback.component",
  templateUrl: "./oauh2callback.component.html",
  styleUrls: ["./oauh2callback.component.css"]
})
export class OAuth2CallbackComponent {
  error: string;

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private identityService: IdentityService,
    private route: Router
  ) {}

  ngOnInit() {
    var self = this;

    self.activatedRoute.queryParamMap.subscribe(async params => {
      let code = params.get("code");
      this.authService.exchangeCode(code).subscribe(
        resp => {
          this.identityService.setCurrentUserToken(resp.body.data.token);
          this.identityService.setCurrentUser(resp.body.data.user);
          this.route.navigate(["/chat"]);
        },
        err => {
          //TODO: implement
        }
      );
    });
  }
}
