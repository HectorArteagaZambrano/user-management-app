import { Injectable } from "@angular/core";

import * as CryptoJS from 'crypto-js';

import { StorageSessionStrategy } from "@core/patterns/strategies/storage-session.stategy";
import { environment } from "@env/environment";

@Injectable({ providedIn: 'root' })

export class SessionStorageAdapter implements StorageSessionStrategy<unknown> {

    public get<T>(key: string): T | null {

        const data = sessionStorage.getItem(key);

        if (data) {
            const bytes: CryptoJS.lib.WordArray = CryptoJS.AES.decrypt(data, environment.secretKey);
            const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8)) as T;
            return decryptedData as T;
        }

        return null;

    }

    public set(key: string, value: unknown): void {

        const data: string = JSON.stringify(value);
        const encryptedData: string = CryptoJS.AES.encrypt(data, environment.secretKey).toString();
        sessionStorage.setItem(key, encryptedData);

    }

    public remove(key: string): void {
        sessionStorage.removeItem(key);
    }

    public removeAll(): void {
        sessionStorage.clear();
    }

}
