import { ValidationErrors, ValidatorFn } from "@angular/forms";

export function repeatPasswordValidator(): ValidatorFn {
    return (control): ValidationErrors | null => {
        const password = control.value['password'];
        const rePass = control.value['rePass'];
        
        let hasMatched = password === rePass;
        return hasMatched ? null : {mismatch: true}
    }
}