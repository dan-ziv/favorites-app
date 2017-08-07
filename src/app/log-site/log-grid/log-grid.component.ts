import {Component, Input} from '@angular/core';
import {Log} from '../../models/log';

@Component({
  selector: 'app-log-grid',
  templateUrl: './log-grid.component.html'
})
export class LogGridComponent {
  @Input()
  public log: Log;
}
