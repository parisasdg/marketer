import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthenticationRoutingModule} from './authentication-routing.module';
import {SignInComponent} from './sign-in/sign-in.component';
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ServerService} from "../server.service";

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [{provide: ServerService, useClass: ServerService}]
})
export class AuthenticationModule {
}
