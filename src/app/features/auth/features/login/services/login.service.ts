import { Injectable } from '@angular/core';

import { delay, Observable, of, take } from 'rxjs';

import { SigninUser } from '@auth/features/login/interfaces';
import { SIGNIN_USER_MOCK } from '@auth/features/login/constants';
import { validateUser } from '@auth/features/login/operators';

import { AuthResult } from '@shared/interfaces';

@Injectable()

export class LoginService {

    public onValidateLogin(payload: SigninUser): Observable<AuthResult> {
        return of(SIGNIN_USER_MOCK)
            .pipe(
                take(1),
                delay(500),
                validateUser(payload)
            );
    }

}