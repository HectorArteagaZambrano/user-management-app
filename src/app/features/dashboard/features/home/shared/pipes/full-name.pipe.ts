import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fullName',
    standalone: true,
    pure: true
})
export class FullNamePipe implements PipeTransform {

    transform(name: any): string {
        return `${name.first} ${name.last}`;
    }

}