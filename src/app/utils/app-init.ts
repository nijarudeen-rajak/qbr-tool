// app-init.ts

import { KeycloakService } from 'keycloak-angular';

const reloadFlagKey = 'reloadFlag';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return () => {
    // Check if the reload flag is set in localStorage
    const reloadFlag = localStorage.getItem(reloadFlagKey);

    // If the flag is not set and the user is not authenticated, perform the reload and set the flag
    if (!reloadFlag) {
      localStorage.setItem(reloadFlagKey, 'true');
      window.location.reload();
    }

    return keycloak.init({
      config: 'assets/keycloak.json',
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: true,
      },
      loadUserProfileAtStartUp: false,
      enableBearerInterceptor: false,
      bearerExcludedUrls: ['/assets', '/clients-public'],
    });
  };
}

// export function initializer(keycloak: KeycloakService): () => Promise<any> {
//     return () =>
//       keycloak.init({
//           config: {
//               url: "https://rocketforward.live/keycloak/auth",
//               realm: "master",
//               clientId: "QBR-Tool"
//           },
//         loadUserProfileAtStartUp: true,
//         initOptions: {
//           onLoad: 'login-required',
//           checkLoginIframe: true
//         },
//         bearerExcludedUrls: []
//       });
//   }
