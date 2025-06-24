import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { delay, map, Observable } from 'rxjs';

import { ApiResponse } from '@home/components/table-user/interfaces';
import { Employee } from '@home/shared/interfaces';

@Injectable()

export class UserService {

  private readonly _http = inject(HttpClient);

  public onGetListUsers(): Observable<Employee[]> {

    const params: HttpParams = new HttpParams().set('results', '200');

    return this._http.get<ApiResponse>('/', { params })
      .pipe(
        delay(500),
        map((item: ApiResponse) => item.results)
      );
  }

}