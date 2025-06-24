import { Directive, HostListener, inject, Input } from '@angular/core';

import { FilterFormService } from '@home/services/filter-form.service';

@Directive({
  selector: '[clickSeachEmployee]',
  standalone: true
})
export class ClickSeachEmployeeDirective {

  @Input({ alias: 'clickSeachEmployee', required: true }) value: string = '';

  private readonly _filterFormService = inject(FilterFormService);

  @HostListener('click')
  protected onHandleClickSearchEmployee(): void {

    this._filterFormService.onSetSearchValue(this.value);

  }

}