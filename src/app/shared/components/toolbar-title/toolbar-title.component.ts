import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-title',
  templateUrl: './toolbar-title.component.html',
  styleUrls: ['./toolbar-title.component.scss']
})
export class ToolbarTitleComponent {
  @Input() title: string = "";
  @Input() icon: string = "";
}
