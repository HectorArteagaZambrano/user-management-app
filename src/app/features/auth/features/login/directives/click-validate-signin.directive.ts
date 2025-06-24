import { Directive, HostListener, inject } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';

import { filter, finalize, tap } from 'rxjs';

import { LoginService } from '@auth/features/login/services/login.service';

import { AuthResult } from '@shared/interfaces';
import { SpinnerService } from '@shared/services/spinner.service';
import { SessionStorageAdapter } from '@shared/patterns/adapters/session-storage.adapter';
import { SnackBarService } from '@shared/services/snack-bar.service';

@Directive({
    selector: '[clickValidateSignin]',
    standalone: true
})
export class ClickValidateSigninDirective {

    private readonly _router = inject(Router);
    private readonly _formGroupDirective = inject(FormGroupDirective);
    private readonly _loginService = inject(LoginService);
    private readonly _spinnerService = inject(SpinnerService);
    private readonly _snackBarService = inject(SnackBarService);
    private readonly _sessionStorageAdapter = inject(SessionStorageAdapter);

    @HostListener('click')
    protected onHandleClickValidateSignin(): void {

        const payload = this._formGroupDirective.form.value;
        const invalidCredentialsMessage: string = 'Usuario o contraseña incorrectos. Por favor, verifica tus credenciales e intenta nuevamente.';

        this._spinnerService.onShowSpinner();

        this._loginService.onValidateLogin(payload)
            .pipe(
                tap((response: AuthResult) => {

                    if (!response.isAuthenticated) {
                        this._snackBarService.onShowNotification(invalidCredentialsMessage);
                        return;
                    }

                    this._sessionStorageAdapter.set('token', response);
                    this._router.navigate(['./dashboard']);

                }),
                finalize(() => this._spinnerService.onHideSpinner()))
            .subscribe();

    }

}