import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebsiteService} from '../services/website.service';
import {LogSiteComponent} from './log-site.component';
import {MaterialDesignModule} from '../material-design/material-design.module';
import { TitleComponent } from './title/title.component';
import { LogGridComponent } from './log-grid/log-grid.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  providers: [
    WebsiteService
  ],
  declarations: [
    LogSiteComponent,
    TitleComponent,
    LogGridComponent
  ],
  exports: [
    LogSiteComponent
  ]
})
export class LogSiteModule {
}
