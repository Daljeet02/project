import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
	{path: '' , component: HomeComponent},
	{path: '', redirectTo: 'agent', pathMatch: 'full'},
	{path: 'agent', loadChildren: () => import('../app/agent/agent.module').then(m => m.AgentModule)},
	{path: 'super-admin', loadChildren: () => import('../app/super-admin/super-admin.module').then(m => m.SuperAdminModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
