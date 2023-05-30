import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitusersComponent } from './components/pages/gitusers/gitusers.component';
import { SearchusersComponent } from './components/pages/searchusers/searchusers.component';

const routes: Routes = [
  {path:'', component:GitusersComponent},
  {path:'searchusers', component:SearchusersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
