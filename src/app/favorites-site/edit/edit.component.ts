import {Component, Input, Inject, EventEmitter, Output} from '@angular/core';
import {Website} from '../../models/website';
import {MdDialog} from '@angular/material';
import {MD_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent {
  @Input()
  public website: Website;
  @Output()
  public websiteEdited = new EventEmitter<Object>();

  constructor(public dialog: MdDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: this.website
    });
    const dialogInstance = dialogRef.componentInstance;
    dialogInstance.websiteEdited.subscribe(event => this.websiteEdited.emit(event));
  }
}

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
})
export class EditDialogComponent {

  @Output()
  public websiteEdited = new EventEmitter<Object>();

  constructor(@Inject(MD_DIALOG_DATA) public data: any) {
  }

  editData(name: string, url: string, id: number) {
    return this.websiteEdited.emit({
      name: name,
      url: url,
      id: id
    });
  }
}
