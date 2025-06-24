import { Component } from '@angular/core';

import { SidebarProfileComponent } from './components/sidebar-profile/sidebar-profile.component';
import { SidebarWidgetComponent } from './components/sidebar-widget/sidebar-widget.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SidebarProfileComponent,
    SidebarWidgetComponent
  ],
  template: `
    <aside class="sidebar">
      <app-sidebar-profile />
      <app-sidebar-widget />
    </aside>
  `,
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {}