import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FavoriteTileComponent} from './favorite-tile/favorite-tile.component';
import {WebsiteService} from '../services/website.service';
import {FavoritesSiteComponent} from './favorites-site.component';
import {TitleComponent} from './title/title.component';
import {AddComponent, AddDialogComponent} from './add/add.component';
import {EditComponent, EditDialogComponent} from './edit/edit.component';
import {DeleteComponent, DeleteDialogComponent} from './delete/delete.component';
import {FavoriteGridComponent} from './favorite-grid/favorite-grid.component';
import {MaterialDesignModule} from '../material-design/material-design.module';
import {SearchFilterPipe} from './search.pipe';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  providers: [
    WebsiteService
  ],
  declarations: [
    FavoriteTileComponent,
    FavoritesSiteComponent,
    TitleComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    AddDialogComponent,
    FavoriteGridComponent,
    FavoriteGridComponent,
    SearchFilterPipe
  ],
  entryComponents: [
    EditDialogComponent,
    DeleteDialogComponent,
    AddDialogComponent
  ],
  exports: [
    FavoritesSiteComponent
  ]
})
export class FavoritesSiteModule {
}
