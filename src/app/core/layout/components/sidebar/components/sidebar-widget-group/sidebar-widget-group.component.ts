import { Component } from '@angular/core';

import { SIDEBAR_WIDGET_DATA } from '../../constants';

@Component({
  selector: 'app-sidebar-widget-group',
  standalone: true,
  templateUrl: './sidebar-widget-group.component.html',
  styleUrl: './sidebar-widget-group.component.scss'
})
export class SidebarWidgetGroupComponent {

  protected GROUPS = SIDEBAR_WIDGET_DATA.GROUPS;

}
