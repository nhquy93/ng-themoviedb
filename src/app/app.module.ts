import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from 'shared/shared.module';
import { ScrollToShrinkDirective } from 'shared/directives';
import { HomeModule } from 'features/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ScrollToShrinkDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,

    HomeModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
