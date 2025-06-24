import { Pipe, PipeTransform } from '@angular/core';
import { InputTextType } from '../enums';

@Pipe({
    name: 'togglePasswordType',
    standalone: true,
    pure: true
})
export class TogglePasswordTypePipe implements PipeTransform {

    transform(isHidePassword: boolean): InputTextType {

        return isHidePassword ? InputTextType.TEXT : InputTextType.PASSWORD;

    }

}