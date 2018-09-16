import { AbstractControl, Validators } from '@angular/forms';

export function ValidateId(control: AbstractControl) {

    let id = control.value;
    if (id != undefined && id != null && id.length == 9) {
        let total = 0;
        for (let i: number = 0; i < 9; i++) {
            if (isNaN(id.charAt(i)))
                return null;
            let x = (((i % 2) + 1) * +id.charAt(i));
            total += Math.floor(x / 10) + x % 10;
        }
        if (total % 10 != 0)
            return { validId: true };
    }
    return null;
}