import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { INITIALIZE_FORM_LOGIN } from '../../constants';
import { TogglePasswordTypePipe } from '../../pipes';
import { ClickValidateSigninDirective } from '../../directives';
import { LoginService } from '../../services/login.service';

import { CustomInputComponent } from '../../../../../../shared/components/custom-input/custom-input.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    MatButtonModule,
    CustomInputComponent,
    MatSlideToggleModule,
    ReactiveFormsModule,
    TogglePasswordTypePipe,
    ClickValidateSigninDirective],
  providers: [LoginService],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  private readonly _formBuilder = inject(FormBuilder);

  protected loginForm = this._formBuilder.group(INITIALIZE_FORM_LOGIN);
  protected isHidePassword = new FormControl<boolean>(false, { nonNullable: true });

}