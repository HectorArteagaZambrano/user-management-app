import { Injectable, signal } from '@angular/core';
import { Employee } from '@home/shared/interfaces';

@Injectable({
    providedIn: 'root',
})
export class SelectedUserService {

    private readonly _selectedUser = signal<Employee | null>(null);
    public selectedUser = this._selectedUser.asReadonly();

    public setSelectedUser(user: Employee): void {
        this._selectedUser.set(user);
    }

    public clearSelectedUser(): void {
        this._selectedUser.set(null);
    }
}