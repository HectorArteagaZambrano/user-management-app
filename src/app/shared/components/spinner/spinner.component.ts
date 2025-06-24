import { Component, inject, Signal } from '@angular/core';

import { SpinnerService } from '@shared/services/spinner.service';

@Component({
  selector: 'app-spinner',
  standalone: true,
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  private readonly _spinnerService = inject(SpinnerService);
  protected isLoadingSpinner: Signal<boolean> = this._spinnerService.isLoading;

}
