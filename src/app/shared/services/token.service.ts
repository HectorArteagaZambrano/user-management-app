import { inject, Injectable } from '@angular/core';

import { AuthResult } from '@shared/interfaces';
import { SessionStorageAdapter } from '@shared/patterns/adapters/session-storage.adapter';

@Injectable({ providedIn: 'root' })
export class TokenService {

  private _sessionStorageAdapter = inject(SessionStorageAdapter);
  private readonly TOKEN_KEY: string = 'token';

  public setToken(token: string): void {
    this._sessionStorageAdapter.set(this.TOKEN_KEY, token);
  }

  public getToken(): AuthResult | null {
    return this._sessionStorageAdapter.get<AuthResult>(this.TOKEN_KEY);
  }

  public clearToken(): void {
    this._sessionStorageAdapter.remove(this.TOKEN_KEY);
  }

  public hasToken(): boolean {
    return !!this.getToken();
  }

}