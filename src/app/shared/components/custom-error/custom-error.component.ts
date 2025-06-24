import { KeyValue, KeyValuePipe, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

import { ErrorMessageFormPipe } from './pipes';

@Component({
  selector: 'app-custom-error',
  standalone: true,
  imports: [
    ErrorMessageFormPipe,
    NgFor,
    KeyValuePipe],
  templateUrl: './custom-error.component.html',
  styleUrl: './custom-error.component.scss'
})
export class CustomErrorComponent {

  @Input({ required: true }) errors: ValidationErrors | null = null;
  @Input({ required: false }) customErrorMessages: Record<string, ValidationErrors> = {};

  public trackByFn(index: number, item: KeyValue<string, any>) {
    return item.key
  }

}
