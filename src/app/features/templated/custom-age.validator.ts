import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[appCustomAge]input[type="number"]',
    providers: [{ provide: NG_VALIDATORS, useExisting: CustomAgeValidator, multi: true }]
})
export class CustomAgeValidator implements Validator {
    constructor() {

    }
    validate(control: FormControl): { [key: string]: any } {

        const val = +control.value;
        if (val < 0) {
            return {
                customAge: { message: 'Too Young!' }
            }
        }
        if (val > 120) {
            return {
                customAge: { message: 'Over the age limit!' }
            }
        }
        return null;


    }


} 