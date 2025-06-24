import { Directive, Inject, Injector, OnInit } from '@angular/core';
import {
    ControlValueAccessor,
    FormControl,
    FormControlDirective,
    FormControlName,
    FormGroupDirective,
    NgControl
} from '@angular/forms';

import {
    Subject,
    distinctUntilChanged,
    takeUntil,
    tap
} from 'rxjs';

@Directive({
    selector: '[controlValueAccesor]',
    standalone: true
})

export class ControlValueAccesorDirective<T> implements ControlValueAccessor, OnInit {

    public control!: FormControl;

    private _isDisabled = false;
    private _destroy$ = new Subject<void>();
    private _onTouched!: () => T;

    constructor(@Inject(Injector) private _injector: Injector) { }

    ngOnInit(): void {
        this.setFormControl();
    }

    setFormControl(): void {

        try {

            const formControl = this._injector.get(NgControl);

            switch (formControl.constructor) {
                case FormControlName:
                    this.control = this._injector
                        .get(FormGroupDirective)
                        .getControl(formControl as FormControlName);
                    break;
                default:
                    this.control = (formControl as FormControlDirective)
                        .form as FormControl;
                    break;
            }

        } catch (error) {
            this.control = new FormControl();
        }

    }

    writeValue(value: T): void {

        if (this.control.value === value) return;

        this.control
            ? this.control.setValue(value)
            : this.control = new FormControl(value);

    }

    registerOnChange(fn: any): void {

        this.control?.valueChanges.pipe(
            takeUntil(this._destroy$),
            distinctUntilChanged(),
            tap((val) => fn(val)))
            .subscribe();

    }

    registerOnTouched(fn: () => T): void {
        this._onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {

        this._isDisabled = isDisabled;

        if (isDisabled) {
            this.control?.disable({ emitEvent: false });
        } else {
            this.control?.enable({ emitEvent: false });
        }

    }

}