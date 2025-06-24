import {
    Directive,
    Renderer2,
    ElementRef,
    HostListener,
    AfterViewInit,
    Input
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
    selector: '[typingDetectionStyle]',
    standalone: true
})

export class TypingDetectionStyleDirective implements AfterViewInit {

    @Input('typingDetectionStyle') control!: FormControl;

    constructor(
        private readonly _el: ElementRef,
        private readonly _renderer: Renderer2) { }

    ngAfterViewInit(): void {
        this.onUpdateVisualState();
    }

    @HostListener('focusout')
    onBlur(): void {
        this.onUpdateVisualState();
    }

    @HostListener('keyup')
    onKeyUp(): void {
        this.onUpdateVisualState();
    }

    private onUpdateVisualState(): void {

        const isValid: boolean = this.control?.valid ?? false;
        const isTouched: boolean = this.control?.touched ?? false;
        const hasValue: boolean = !!this.control?.value;

        const hasError: boolean = !isValid && (isTouched || hasValue);

        if (hasError) {
            this._renderer.addClass(this._el.nativeElement, 'form__group-error');
        }

        if (isValid) {
            this._renderer.removeClass(this._el.nativeElement, 'form__group-error');
        }

    }

}