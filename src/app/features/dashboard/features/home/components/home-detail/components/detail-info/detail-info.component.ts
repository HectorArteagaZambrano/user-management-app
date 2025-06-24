import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Employee } from '@home/shared/interfaces';
import { FullAddressPipe } from '@home/shared/pipes';

@Component({
  selector: 'app-detail-info',
  standalone: true,
  imports: [
    DatePipe,
    FullAddressPipe],
  templateUrl: './detail-info.component.html',
  styleUrl: './detail-info.component.scss'
})
export class DetailInfoComponent {

  @Input({ required: true }) data!: Employee;

}