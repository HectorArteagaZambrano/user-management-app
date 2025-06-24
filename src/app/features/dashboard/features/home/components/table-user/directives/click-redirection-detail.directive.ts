import { Directive, HostListener, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '@home/shared/interfaces';
import { SelectedUserService } from '@home/shared/services/selected-user.service';

@Directive({
    selector: '[clickRedirectionDetail]',
    standalone: true
})
export class ClickRedirectionDetailDirective {

    @Input('clickRedirectionDetail') user!: Employee;

    private readonly _router = inject(Router);
    private readonly _selectedUserService = inject(SelectedUserService);

    @HostListener('click')
    protected onHandleClickRedirectionDetail(): void {
        this._selectedUserService.setSelectedUser(this.user);
        this._router.navigate(['/dashboard/home/detail']);
    }

}