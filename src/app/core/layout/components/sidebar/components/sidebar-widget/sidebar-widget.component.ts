import { Component } from '@angular/core';

import { SidebarWidgetLatestComponent } from '../sidebar-widget-latest/sidebar-widget-latest.component';
import { SidebarWidgetGroupComponent } from '../sidebar-widget-group/sidebar-widget-group.component';
import { SidebarWidgetMoreComponent } from '../sidebar-widget-more/sidebar-widget-more.component';
import { SidebarWidgetEventComponent } from '../sidebar-widget-event/sidebar-widget-event.component';

@Component({
  selector: 'app-sidebar-widget',
  standalone: true,
  imports: [
    SidebarWidgetLatestComponent,
    SidebarWidgetGroupComponent,
    SidebarWidgetMoreComponent,
    SidebarWidgetEventComponent
  ],
  template: `
    <section class="sidebar-widget">
      <app-sidebar-widget-latest />
      <app-sidebar-widget-group />
      <app-sidebar-widget-more />
      <app-sidebar-widget-event />
    </section>
  `,
  styleUrl: './sidebar-widget.component.scss'
})
export class SidebarWidgetComponent { }