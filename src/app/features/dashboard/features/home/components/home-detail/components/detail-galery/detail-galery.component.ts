import { Component } from '@angular/core';

import { CATS } from '@home/components/home-detail/constants';

@Component({
  selector: 'app-detail-galery',
  standalone: true,
  templateUrl: './detail-galery.component.html',
  styleUrl: './detail-galery.component.scss'
})
export class DetailGaleryComponent {

  protected CATS = CATS;

}