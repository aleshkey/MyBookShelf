import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function passwordMatchValidator(
    passwordKey: string,
    confirmPasswordKey: string
): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
        const pass = group.get(passwordKey)?.value;
        const confirm = group.get(confirmPasswordKey)?.value;

        if (pass == null || confirm == null) {
            return null;
        }

        return pass === confirm
            ? null
            : { passwordsMismatch: true };
    };
}
