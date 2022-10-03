import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { BehaviorSubject } from 'rxjs';
import { configOAuthGoogle } from 'src/environments/environment';

const oAuthConfig: AuthConfig = {
  issuer: configOAuthGoogle.issuerUri,
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin + '/home',
  clientId: configOAuthGoogle.clientId,
  scope: configOAuthGoogle.scope,
  clearHashAfterLogin: false,
};

@Injectable()
export class GoogleApiService {
  claims: any;
  isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
    private readonly oAuthService: OAuthService
  ) {
    oAuthService.configure(oAuthConfig);
    oAuthService.tokenValidationHandler = new JwksValidationHandler();
    oAuthService.loadDiscoveryDocumentAndTryLogin();
  }

  async signInWithGoogle() {
    console.log(this.isLoggedIn);
    if (!this.isLoggedIn) {
      this.oAuthService.loadDiscoveryDocument().then(() => {
        this.oAuthService.tryLoginImplicitFlow().then(() => {
          if (!this.oAuthService.hasValidAccessToken()) {
            this.oAuthService.initCodeFlow();
          }
        });
      });
    } else {
      const user = await this.oAuthService.loadUserProfile();
      if(user) {
        console.log(user);
        this.isLoggedIn$.next(true);
      }
    }
  }

  signOut() {
    console.log('Sign Out');
    this.oAuthService.logOut();
    this.oAuthService.revokeTokenAndLogout();
    this.isLoggedIn$.next(false);
    sessionStorage.clear();
  }

  get isLoggedIn() {
    return !!this.oAuthService.getIdToken();
  }

  get token() {
    this.claims = this.oAuthService.getIdentityClaims();
    return this.claims ? this.claims : null;
  }
}
