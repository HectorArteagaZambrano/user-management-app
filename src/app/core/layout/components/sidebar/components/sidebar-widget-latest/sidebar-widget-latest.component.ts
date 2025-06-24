import { Component } from '@angular/core';
import { SIDEBAR_WIDGET_DATA } from '../../constants';

@Component({
  selector: 'app-sidebar-widget-latest',
  standalone: true,
  templateUrl: './sidebar-widget-latest.component.html',
  styleUrl: './sidebar-widget-latest.component.scss'
})
export class SidebarWidgetLatestComponent {

  protected LATEST_ARTICLES = SIDEBAR_WIDGET_DATA.LATEST_ARTICLES;

}