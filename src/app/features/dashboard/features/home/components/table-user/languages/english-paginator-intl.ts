import { MatPaginatorIntl } from '@angular/material/paginator';

export function englishPaginatorIntl(): MatPaginatorIntl {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = 'Rows per page';
  paginatorIntl.nextPageLabel = 'Next page';
  paginatorIntl.previousPageLabel = 'Previous page';
  paginatorIntl.firstPageLabel = 'First page';
  paginatorIntl.lastPageLabel = 'Last page';

  paginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number): string => {
   
    if (length === 0 || pageSize === 0) {
      return `0 of ${length} rows`;
    }

    const startIndex = page * pageSize;
    const endIndex = Math.min(startIndex + pageSize, length);
    return `Page ${startIndex + 1} - ${endIndex} of ${length} rows`;
    
  };

  return paginatorIntl;

}