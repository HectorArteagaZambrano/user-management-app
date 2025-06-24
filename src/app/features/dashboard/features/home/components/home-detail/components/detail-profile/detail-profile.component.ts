import { Component, Input } from '@angular/core';

import { Employee } from '@home/shared/interfaces';
import { FullNamePipe } from '@home/shared/pipes';

@Component({
  selector: 'app-detail-profile',
  standalone: true,
  imports: [FullNamePipe],
  templateUrl: './detail-profile.component.html',
  styleUrl: './detail-profile.component.scss'
})
export class DetailProfileComponent {

    @Input({ required: true }) data!: Employee;

}
