import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Website} from '../../models/website';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html'
})
export class DeleteComponent {

  @Output()
  public websiteDeleted = new EventEmitter<Object>();
  @Input()
  public website: Website;

  constructor(public dialog: MdDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe(deleted => {
      if (deleted) {
        this.websiteDeleted.emit({id: this.website.id});
      }
    });
  }
}

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
})
export class DeleteDialogComponent {
  constructor() {
  }
}
