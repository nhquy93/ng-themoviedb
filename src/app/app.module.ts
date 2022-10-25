import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from 'shared/shared.module';
import { HomeModule } from 'features/home/home.module';
import { CatalogModule } from 'features/catalog/catalog.module';
import { DetailModule } from 'features/detail/detail.module';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { LoginComponent } from './components/login/login.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { GoogleApiService } from 'src/app/services/google-api.service';
import { FacebookLoginProvider, GoogleLoginProvider, MicrosoftLoginProvider, SocialAuthService, SocialAuthServiceConfig } from 'angularx-social-login';
import { UserInfoComponent } from './components/user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    UserInfoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MdbModalModule,
    SharedModule,

    OAuthModule.forRoot(),

    HomeModule,
    CatalogModule,
    DetailModule,
  ],
  providers: [SocialAuthService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('763608744939080'),
          },
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '552213338758-b80960vcdvop6o0anc6o7d1i6omfcu1n.apps.googleusercontent.com'
              , {
                scope: 'openid profile email',
                plugin_name: 'App Name that you used in google developer console API'
              }
            ),
          },
          {
            id: MicrosoftLoginProvider.PROVIDER_ID,
            provider: new MicrosoftLoginProvider(
              '2f897049-2aba-4942-9ef6-3cc684a822c4',
              {
                authority: 'https://login.microsoftonline.com/18023bac-d502-448e-9a2c-1f737b0a9576',
                redirect_uri: 'http://localhost:4200',
                logout_redirect_uri: 'http://localhost:4200'
              }
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
