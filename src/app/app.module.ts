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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
