// keycloak-auth-guard.service.ts

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private keycloakService: KeycloakService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      try {
        // Check if the user is authenticated
        const authenticated = await this.keycloakService.isLoggedIn();

        if (!authenticated) {
          // Redirect to Keycloak login if not authenticated
          this.keycloakService.login();
          resolve(false);
          return;
        }

        // Check if the user has the admin role
        const hasAdminRole = this.keycloakService.isUserInRole('admin');

        if (!hasAdminRole) {
          console.log("Have admin role");
          this.keycloakService.logout();
          resolve(false);
          return;
        }

        // User is authenticated and has the admin role, allow navigation
        resolve(true);
      } catch (error) {
        console.error('Error in KeycloakAuthGuard', error);
        reject(error);
      }
    });
  }
}


