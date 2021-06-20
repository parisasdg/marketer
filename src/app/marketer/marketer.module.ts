import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MarketerRoutingModule} from './marketer-routing.module';
import {HeaderModule} from "../header/header.module";
import {MarketerListComponent} from './marketer-list/marketer-list.component';
import {AddMarketerComponent} from './add-marketer/add-marketer.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    MarketerListComponent,
    AddMarketerComponent
  ],
  imports: [
    CommonModule,
    MarketerRoutingModule,
    HeaderModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class MarketerModule {
}
