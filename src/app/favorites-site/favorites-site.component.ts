import {Component} from '@angular/core';
import {WebsiteService} from '../services/website.service';

@Component({
  selector: 'app-favorites-site',
  templateUrl: './favorites-site.component.html'
})
export class FavoritesSiteComponent {
  public isGridView: boolean;
  public title: string;
  public websites: WebsiteService;

  constructor(websites: WebsiteService) {
    this.title = 'Favorite websites';
    this.websites = websites;
    this.isGridView = false;
  }
}
