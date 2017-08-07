import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-al-title',
  templateUrl: './title.component.html'
})
export class TitleComponent {
  @Input()
  title: string;
  @Input()
  count: number;
}
