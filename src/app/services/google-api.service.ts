import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
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

@Injectable({
  providedIn: 'root',
})
export class GoogleApiService {
  claims: any;
  isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
    private readonly oAuthService: OAuthService
  ) {
    oAuthService.configure(oAuthConfig);
    this.signInWithGoogle();
  }

  signInWithGoogle() {
    if (!this.isLoggedIn) {
      this.oAuthService.loadDiscoveryDocument().then(() => {
        this.oAuthService.tryLoginImplicitFlow().then(() => {
          if (!this.oAuthService.hasValidAccessToken()) {
            this.oAuthService.initLoginFlow();
          } else {
            this.oAuthService.loadUserProfile().then((user) => {
              console.log(user);
              this.router.navigateByUrl('home');
            });
          }
        });
      });
    }
    this.isLoggedIn$.next(true);
  }

  signOut() {
    console.log('Sign Out');
    this.isLoggedIn$.next(false);
    this.oAuthService.logOut();
  }

  get isLoggedIn() {
    return !!this.oAuthService.getIdToken();
  }

  get token() {
    this.claims = this.oAuthService.getIdentityClaims();
    return this.claims ? this.claims : null;
  }
}
