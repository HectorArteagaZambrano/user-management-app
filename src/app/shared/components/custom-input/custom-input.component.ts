import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';

import { ControlValueAccesorDirective } from '../../directives';
import { TypingDetectionStyleDirective } from './directives';
import { CustomErrorComponent } from '../custom-error/custom-error.component';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    TypingDetectionStyleDirective,
    CustomErrorComponent],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomInputComponent<T> extends ControlValueAccesorDirective<T> {

  @Input({ required: true }) label: string = '';
  @Input({ required: true }) placeholder: string = '';
  @Input({ required: false }) type: string = 'text';

}