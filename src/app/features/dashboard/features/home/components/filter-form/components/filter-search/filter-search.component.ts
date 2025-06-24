import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { ClickSeachEmployeeDirective } from '@home/components/filter-form/directives';
import { ControlValueAccesorDirective } from '@shared/directives';

@Component({
  selector: 'app-filter-search',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    ClickSeachEmployeeDirective
  ],
  templateUrl: './filter-search.component.html',
  styleUrl: './filter-search.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FilterSearchComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterSearchComponent<T> extends ControlValueAccesorDirective<T> { }