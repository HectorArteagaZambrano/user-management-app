import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

import { SigninUser } from '@auth/features/login/interfaces';

import { AuthResult } from '@shared/interfaces';
import { USER_MOCK } from '@shared/constants';

export function validateUser(credentials: SigninUser): OperatorFunction<SigninUser[], AuthResult> {
    return source$ => source$.pipe(
        map(users => users.find(
            user =>
                user.username === credentials.username &&
                user.password === credentials.password
        )),
        map(authUser => {
            if (!authUser) return null;
            return USER_MOCK.find(user => user.username === authUser.username) ?? null;
        }),
        map(userDetails => ({
            isAuthenticated: !!userDetails,
            user: userDetails
        }))
    );
}
