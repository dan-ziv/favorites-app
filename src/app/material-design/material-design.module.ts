import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdDialogModule,
  MdInputModule,
  MdCardModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdGridListModule,
  MdSidenavModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    BrowserAnimationsModule,
    MdDialogModule,
    MdInputModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdGridListModule,
    MdSidenavModule
  ],
  exports: [
    CommonModule,
    MdCardModule,
    BrowserAnimationsModule,
    MdDialogModule,
    MdInputModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdGridListModule,
    MdSidenavModule
  ]
})
export class MaterialDesignModule {
}
