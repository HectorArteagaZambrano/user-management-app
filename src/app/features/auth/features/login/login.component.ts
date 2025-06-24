import { Component } from '@angular/core';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginContactComponent } from './components/login-contact/login-contact.component';
import { LoginTitleComponent } from './components/login-title/login-title.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginTitleComponent,
    LoginFormComponent,
    LoginContactComponent
  ],
  template: `
    <section>
      <article>
        <app-login-title />
        <app-login-form />
        <app-login-contact />
      </article>
    </section>
  `,
  styleUrl: './login.component.scss'
})
export class LoginComponent { }