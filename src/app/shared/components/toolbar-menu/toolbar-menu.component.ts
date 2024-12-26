import { Component, Input } from '@angular/core';
import { MenuItem } from '@app/shared/models/menuItem';

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.scss']
})
export class ToolbarMenuComponent {
  @Input() shadow: boolean  =  false;
  @Input() popText: boolean  =  false;
  @Input() menuTitle: string  =  ''
  @Input() items_menu: MenuItem[] = [];

}
