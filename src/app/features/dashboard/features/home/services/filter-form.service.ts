import { Injectable, Signal, WritableSignal, signal } from '@angular/core';

import { INITIALIZE_FILTER_FORM_DASHBOARD } from '@home/constants';
import { FilterForm } from '@home/interfaces/filter-form.interface';

@Injectable()
export class FilterFormService {

    private readonly _filters: WritableSignal<FilterForm> = signal(INITIALIZE_FILTER_FORM_DASHBOARD);
    public readonly filters: Signal<FilterForm> = this._filters.asReadonly();

    public onSetSearchValue(searchValue: string | null): void {
        this._filters.update(current => ({
            ...current,
            search: searchValue
        }));
    }

}