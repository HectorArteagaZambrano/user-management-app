import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from '@shared/services/spinner.service';

let activeRequests: number = 0;

const shouldExcludeResourcePublic = (url: string): boolean => {
  const excludedPaths = ['/images/'];
  return excludedPaths.some(path => url.includes(path));
};

const showSpinner = (spinnerService: SpinnerService) => {

  if (activeRequests === 0) {
    spinnerService.onShowSpinner();
  }

  activeRequests++;

};

const hideSpinner = (spinnerService: SpinnerService) => {

  activeRequests--;

  if (activeRequests === 0) {
    spinnerService.onHideSpinner();
  }

};

export const handleSpinnerInterceptor: HttpInterceptorFn = (req, next) => {

  if (shouldExcludeResourcePublic(req.url)) {
    return next(req);
  }

  const spinnerService = inject(SpinnerService);
  showSpinner(spinnerService);

  return next(req).pipe(
    finalize(() => hideSpinner(spinnerService))
  );

};
