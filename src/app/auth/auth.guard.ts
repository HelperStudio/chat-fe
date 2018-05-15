// src/app/auth/auth-guard.service.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { IdentityService } from '../services/identity.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public identityService: IdentityService, public router: Router) {}
  canActivate(): boolean {
    if (!this.identityService.getCurrentUser()) {
      this.router.navigate(['hello']);
      return false;
    }
    return true;
  }
}