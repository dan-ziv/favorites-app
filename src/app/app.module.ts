import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FavoritesSiteModule} from './favorites-site/favorites-site.module';
import {LogSiteModule} from './log-site/log-site.module';
import {MaterialDesignModule} from './material-design/material-design.module';
import {WebsiteService} from './services/website.service';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialDesignModule,
    FavoritesSiteModule,
    LogSiteModule
  ],
  providers: [
    WebsiteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
