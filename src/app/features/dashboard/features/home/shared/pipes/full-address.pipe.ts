import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fullAddress',
    standalone: true,
    pure: true
})
export class FullAddressPipe implements PipeTransform {

    transform(location: any): string {

        const { street, city, state, postcode, country } = location;
        return `${street.name} ${street.number}, ${city}, ${state}, ${postcode}, ${country}`;

    }

}