import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { environment } from '@env/environment';

export const handleEnvironmentInterceptor: HttpInterceptorFn = (req, next) => {

    if (req.url.includes('/images/')) {
        const modifiedUrl = req.url.replace('/images/', `${environment.baseIcon}/`);
        const modifiedReq = req.clone({ url: modifiedUrl });
        return next(modifiedReq);
    }

    const modifiedReq: HttpRequest<unknown> = req.clone({ url: `${environment.baseUrl}${req.url}` });
    return next(modifiedReq);

};