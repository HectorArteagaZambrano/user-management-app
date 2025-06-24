import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { ControlValueAccesorDirective } from '@shared/directives';

@Component({
  selector: 'app-filter-date',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './filter-date.component.html',
  styleUrl: './filter-date.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FilterDateComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterDateComponent<T> extends ControlValueAccesorDirective<T> {

  @Input({ required: true }) label: string = '';

}