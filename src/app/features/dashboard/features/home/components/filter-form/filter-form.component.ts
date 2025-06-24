import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { INITIALIZE_FORM_DASHBOARD } from '@home/components/filter-form/constants';
import { FilterSearchComponent } from '@home/components/filter-form/components/filter-search/filter-search.component';
import { FilterDateComponent } from '@home/components/filter-form/components/filter-date/filter-date.component';

@Component({
  selector: 'app-filter-form.',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FilterSearchComponent,
    FilterDateComponent],
  templateUrl: './filter-form.component.html',
  styleUrl: './filter-form..component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterFormComponent {

  private readonly _fb = inject(FormBuilder);
  protected form: FormGroup = this._fb.group(INITIALIZE_FORM_DASHBOARD);

}