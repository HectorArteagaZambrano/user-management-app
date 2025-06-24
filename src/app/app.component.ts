import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { IconsService } from '@core/services/icons.service';
import { SpinnerComponent } from '@shared/components/spinner/spinner.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SpinnerComponent,
    RouterOutlet
  ],
  template: `
    <app-spinner />
    <router-outlet />
  `,
  styleUrl: './app.component.scss',
  providers: [IconsService]
})
export class AppComponent {

  title = 'user-management-app';

  private readonly _iconsService = inject(IconsService);

  constructor() {
    this._iconsService.onRegisterIcons();
  }

}