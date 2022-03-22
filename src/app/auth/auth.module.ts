import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { RecaptchaModule } from 'angular-google-recaptcha';

@NgModule({
  declarations: [
    LoginComponent,
    
    RegisterComponent, CreateComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    FormsModule, RecaptchaModule.forRoot({
      siteKey: '6LehMdsUAAAAAPC3YDgD8bSTNePZyimp9J85UWNa',
    }),
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      // {
      //   path: 'new',
      //   component: CreateComponent
      // }
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AuthModule { }
