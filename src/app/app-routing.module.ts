import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
	{path: '' , component: HomeComponent},
	{path: '', redirectTo: 'agent', pathMatch: 'full'},
	{path: 'agent', loadChildren: () => import('../app/agent/agent.module').then(m => m.AgentModule)},
<<<<<<< HEAD
	{path: 'super-admin', loadChildren: () => import('../app/super-admin/super-admin.module').then(m => m.SuperAdminModule)},
=======
>>>>>>> d9d6ae9d7158a701861c288c688887384543c9f5

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
