import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BaseComponent } from './base/base.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

// const routes: Routes = [
// 	{   path: 'dashboard', component: DashboardComponent,
//         children :[
//             { path: 'edit-profile', component: EditProfileComponent},
//         ]
//     },
    
// ];

const routes: Routes = [
	{
		path: '',
		component: BaseComponent,
		children: [
			{
				path: 'agent/dashboard',
				component: DashboardComponent,
			},
			{
				path: 'agent/edit-profile',
				component:EditProfileComponent,
			},
		]
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
