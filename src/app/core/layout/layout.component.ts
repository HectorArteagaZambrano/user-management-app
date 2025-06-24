import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    NavbarComponent
  ],
  template: `
    <section>
      <app-sidebar />
      <article>
        <app-navbar />
        <router-outlet />
      </article>
    </section>
  `,
  styleUrl: './layout.component.scss'
})
export class LayoutComponent { }