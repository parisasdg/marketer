import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MarketerListComponent} from "./marketer-list/marketer-list.component";
import {AddMarketerComponent} from "./add-marketer/add-marketer.component";

const routes: Routes = [
  {path:'' ,component:MarketerListComponent},
  {path:'add' ,component:AddMarketerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketerRoutingModule { }
