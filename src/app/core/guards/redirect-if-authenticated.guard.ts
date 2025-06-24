import { inject } from '@angular/core';
import { Router, CanMatchFn } from '@angular/router';
import { TokenService } from '@shared/services/token.service';

export const redirectIfAuthenticatedGuardFn: CanMatchFn = () => {

    const tokenService = inject(TokenService);
    const router = inject(Router);

    if (tokenService.hasToken()) {
        router.navigate(['/dashboard']);
        return false;
    }

    return true;
    
}