import { Component } from '@angular/core';

import { StatsCardComponent } from '@home/components/stats-card/stats-card.component';
import { FilterFormComponent } from '@home/components/filter-form/filter-form.component';
import { TableUserComponent } from '@home/components/table-user/table-user.component';
import { FilterFormService } from '@home/services/filter-form.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    StatsCardComponent,
    FilterFormComponent,
    TableUserComponent
  ],
  template: `
    <app-stats-card />
    <app-filter-form />
    <app-table-user />
  `,
  providers: [FilterFormService]
})
export class HomeComponent { }