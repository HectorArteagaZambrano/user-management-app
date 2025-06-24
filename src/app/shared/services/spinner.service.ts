import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class SpinnerService {

  private _isLoading = signal(false);

  public readonly isLoading = this._isLoading.asReadonly();

  public onShowSpinner(): void {
    this._isLoading.set(true);
  }

  public onHideSpinner(): void {
    this._isLoading.set(false);
  }

}