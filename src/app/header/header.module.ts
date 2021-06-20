import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderRoutingModule} from './header-routing.module';
import {HeaderComponent} from './header/header.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  exports :[HeaderComponent]
})


export class HeaderModule {
}
