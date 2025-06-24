import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { Router } from '@angular/router';

import { TokenService } from '@shared/services/token.service';
import { SpinnerService } from '@shared/services/spinner.service';
import { defer, switchMap, tap, timer } from 'rxjs';

export const handleAuthTokenInterceptor: HttpInterceptorFn = (req, next) => {

    const spinner = inject(SpinnerService);
    const router = inject(Router);
    const tokenService = inject(TokenService);

    if (!tokenService.hasToken()) {
        spinner.onShowSpinner();
        return defer(() =>
            timer(1000).pipe(
                tap(() => spinner.onHideSpinner()),
                switchMap(() => {
                    router.navigate(['/auth']);
                    return next(req);
                })
            )
        );
    }

    return next(req);

};