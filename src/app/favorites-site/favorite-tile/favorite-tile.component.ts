import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Website} from '../../models/website';

@Component({
  selector: 'app-favorite-tile',
  templateUrl: './favorite-tile.component.html'
})
export class FavoriteTileComponent {

  @Input()
  public website: Website;
  @Output()
  public websiteDeleted = new EventEmitter<Object>();
  @Output()
  public websiteEdited = new EventEmitter<Object>();

  constructor() {
  }
}
