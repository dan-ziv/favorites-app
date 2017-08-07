import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Website} from '../../models/website';

@Component({
  selector: 'app-grid-favorite',
  templateUrl: './favorite-grid.component.html'
})
export class FavoriteGridComponent {

  @Input()
  public website: Website;
  @Output()
  public websiteDeleted = new EventEmitter<Object>();
  @Output()
  public websiteEdited = new EventEmitter<Object>();


  constructor() {
  }

}
