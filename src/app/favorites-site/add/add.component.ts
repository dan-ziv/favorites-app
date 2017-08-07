import {Component, EventEmitter, Output} from '@angular/core';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-fs-add',
  templateUrl: './add.component.html'
})
export class AddComponent {

  @Output()
  public websiteAdded = new EventEmitter<Object>();

  constructor(public dialog: MdDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddDialogComponent);
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.websiteAdded.emit(data);
      }
    });
  }
}

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
})
export class AddDialogComponent {
  constructor() {
  }
}
