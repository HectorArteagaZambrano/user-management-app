import { Pipe, PipeTransform } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Pipe({
    name: 'tableIndex',
    standalone: true,
    pure: true
})
export class TableIndexPipe implements PipeTransform {

    transform(index: number, paginator: MatPaginator): number {

        if (!paginator) return index + 1;
        return index + 1 + (paginator.pageIndex * paginator.pageSize);

    }
}