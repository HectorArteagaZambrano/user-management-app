import { Validators } from "@angular/forms";

export const INITIALIZE_FORM_LOGIN = {
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
}