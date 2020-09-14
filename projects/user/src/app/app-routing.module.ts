import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'user/:form', component: UserComponent},
  {path: 'user/:form/:dojo', component: UserComponent},

  {path: '**', redirectTo: 'user', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
