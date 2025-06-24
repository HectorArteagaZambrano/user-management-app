import { Pipe, PipeTransform } from '@angular/core';
import { VALIDATION_ERROR_MESSAGE } from '../constants';

@Pipe({
    name: 'errorMessageForm',
    pure: true,
    standalone: true
})

export class ErrorMessageFormPipe implements PipeTransform {

    protected errorsMessages = VALIDATION_ERROR_MESSAGE;

    transform(key: string, errValue: any, customErrorMessages: any): string {

        if (customErrorMessages) {
            this.errorsMessages = {
                ...this.errorsMessages,
                ...customErrorMessages
            }
        } else {

            if (!this.errorsMessages[key]) {
                console.warn(`Missing message for ${key} validator...`);
                return '';
            }

        }

        return this.errorsMessages[key](errValue);

    }
}