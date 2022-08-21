import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Subject } from 'rxjs';
import { configOAuthGoogle } from 'src/environments/environment';

const oAuthConfig: AuthConfig = {
  issuer: configOAuthGoogle.issuerUri,
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: configOAuthGoogle.clientId,
  scope: configOAuthGoogle.scope,
  preserveRequestedRoute: true
};

@Injectable({
  providedIn: 'root',
})
export class GoogleApiService {
  userGoogle = new Subject();

  constructor(
    private readonly oAuthService: OAuthService) {
    oAuthService.configure(oAuthConfig);
  }

  signInWithGoogle() {
    return this.oAuthService.loadDiscoveryDocument().then(() => {
          this.oAuthService.tryLoginImplicitFlow().then(() => {
          if (!this.oAuthService.hasValidAccessToken()) {
          this.oAuthService.initLoginFlow();
        } else {
          this.oAuthService.loadUserProfile().then((userProfile) => {
            
            console.log(JSON.stringify(userProfile));
            this.userGoogle.next(userProfile);
          });
        }
      });
    });
  }
}
