import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NotifierComponent } from '@shared/components/notifier/notifier.component';

@Injectable({ providedIn: 'root' })

export class SnackBarService {

  private readonly closeButton: string = 'X';
  private readonly _snackBar = inject(MatSnackBar);

  public onShowNotification(displayMessage: string): void {

    this._snackBar.openFromComponent(NotifierComponent, {
      data: {
        message: displayMessage,
        buttonText: this.closeButton
      },
      duration: 150000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })

  }

}