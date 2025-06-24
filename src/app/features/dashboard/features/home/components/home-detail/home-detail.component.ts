import { Component, inject, OnDestroy, Signal } from '@angular/core';

import { DetailProfileComponent } from '@home/components/home-detail/components/detail-profile/detail-profile.component';
import { DetailInfoComponent } from '@home/components/home-detail/components/detail-info/detail-info.component';
import { DetailGaleryComponent } from '@home/components/home-detail/components/detail-galery/detail-galery.component';

import { Employee } from '@home/shared/interfaces';
import { SelectedUserService } from '@home/shared/services/selected-user.service';

@Component({
  selector: 'app-home-detail',
  standalone: true,
  imports: [
    DetailProfileComponent,
    DetailInfoComponent,
    DetailGaleryComponent
  ],
  template: `
    <app-detail-profile [data]="selectedUser()!"/>
    <app-detail-info [data]="selectedUser()!" />
    <app-detail-galery />
  `
})
export class HomeDetailComponent implements OnDestroy {

  private readonly _selectedUserService = inject(SelectedUserService);
  public selectedUser: Signal<Employee | null> = this._selectedUserService.selectedUser;

  ngOnDestroy(): void {
    this._selectedUserService.clearSelectedUser();
  }

}