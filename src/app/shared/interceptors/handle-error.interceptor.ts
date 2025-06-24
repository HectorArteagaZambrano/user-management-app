import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SnackBarService } from '@shared/services/snack-bar.service';

export const handleErrorInterceptor: HttpInterceptorFn = (req, next) => {

    const snackBar = inject(SnackBarService);
    const defaultErrorMessage: string = 'Ocurrió un error inesperado, inténtelo de nuevo.';

    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {
            const errorMessage = error.error?.message || defaultErrorMessage;
            snackBar.onShowNotification(errorMessage);
            return throwError(() => error);
        })
    );

};