import { ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailValidator(): ValidatorFn {
    return (control): ValidationErrors | null => {

        const regex = /[A-Za-z]{5,}\.*[A-Za-z]*@gmail\.(bg|com)$/;

        if (control.value === '') {
            return null;
        }

        const isValid = regex.test(control.value);

        return isValid ? null : { invalidEmail: true }
    }
}