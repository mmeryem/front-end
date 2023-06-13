import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNavireComponent } from './create-navire/create-navire.component';
import { NavireListComponent } from './navire-list/navire-list.component';
import { NavireDetailComponent } from './navire-detail/navire-detail.component';

const routes: Routes = [
  { path:'', redirectTo:'navire', pathMatch:'full'},
  { path:'navire', component:CreateNavireComponent},
  { path: 'list' , component: NavireListComponent},
  { path: 'detail/:id',component:NavireDetailComponent},
  { path: 'update/:id',component:CreateNavireComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
