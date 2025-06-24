import { Component, inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notifier',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule],
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.scss']
})
export class NotifierComponent {

  protected readonly data: any = inject(MAT_SNACK_BAR_DATA);
  protected readonly snackBarRef = inject(MatSnackBarRef<NotifierComponent>);

}
