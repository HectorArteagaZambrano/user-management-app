import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router, Route, UrlSegment } from '@angular/router';

import { Employee } from '@home/shared/interfaces/employe.interface.interface';
import { SelectedUserService } from '@home/shared/services/selected-user.service';

const onRedirectIfNoUser = (): boolean => {

    const selectedUserService = inject(SelectedUserService);
    const router = inject(Router);

    const user: Employee | null = selectedUserService.selectedUser();

    if (user) return true;

    router.navigate(['/dashboard/home']);
    return false;

};

export const checkSelectedUserGuard: CanActivateFn = () => onRedirectIfNoUser();
export const checkSelectedUserMatchGuard: CanMatchFn = (_route: Route, _segments: UrlSegment[]) => onRedirectIfNoUser();
