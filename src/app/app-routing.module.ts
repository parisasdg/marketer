import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)},
  {path: 'header', loadChildren: () => import('./header/header.module').then(m => m.HeaderModule)},
  {path: 'marketerList', loadChildren: () => import('./marketer/marketer.module').then(m => m.MarketerModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
