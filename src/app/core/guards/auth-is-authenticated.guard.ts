import { inject } from '@angular/core';
import { Router, CanMatchFn } from '@angular/router';
import { defer, of, switchMap, tap, timer } from 'rxjs';

import { SpinnerService } from '@shared/services/spinner.service';
import { TokenService } from '@shared/services/token.service';

export const authIsAuthenticatedGuardFn: CanMatchFn = () => {

  const spinner = inject(SpinnerService);
  const tokenService = inject(TokenService);
  const router = inject(Router);

  if (tokenService.hasToken()) {
    return true;
  }

  spinner.onShowSpinner();

  return defer(() =>
    timer(1000).pipe(
      tap(() => spinner.onHideSpinner()),
      switchMap(() => {
        router.navigateByUrl('/auth');
        return of(false);
      })
    )
  );

};
