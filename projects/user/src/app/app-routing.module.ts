import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  {path: 'goto', component: UserComponent},
  {path: 'goto/:form', component: UserComponent},
  {path: 'goto/:form/:dojo', component: UserComponent},

  {path: '**', redirectTo: 'goto', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
