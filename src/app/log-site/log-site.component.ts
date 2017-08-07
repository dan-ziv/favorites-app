import {Component} from '@angular/core';
import {WebsiteService} from '../services/website.service';

@Component({
  selector: 'app-log-site',
  templateUrl: './log-site.component.html'
})
export class LogSiteComponent {
  public title: string;
  public websites: WebsiteService;

  constructor(websites: WebsiteService) {
    this.title = 'Actions log';
    this.websites = websites;
  }
}
