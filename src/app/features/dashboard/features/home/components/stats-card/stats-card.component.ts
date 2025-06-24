import { ChangeDetectionStrategy, Component } from '@angular/core';

import { STATS_DATA } from '@home/components/filter-form/constants';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatsCardComponent {

  protected STATS_DATA = STATS_DATA;

}