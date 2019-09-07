import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< HEAD
import { BaseComponent } from './base/base.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
=======
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { BaseComponent } from './base/base.component';
import { CharttestComponent } from './charttest/charttest.component';
import { RequestComponent } from './request/request.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { PreviouslyAskedQuestionComponent } from './previously-asked-question/previously-asked-question.component';


>>>>>>> d9d6ae9d7158a701861c288c688887384543c9f5

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
<<<<<<< HEAD
				path: 'agent/dashboard',
				component: DashboardComponent,
			},
			{
				path: 'agent/edit-profile',
				component:EditProfileComponent,
			},
=======
				path: 'dashboard',
				component: DashboardComponent,
			},
			{
				path: 'edit-profile',
				component: EditProfileComponent,
			},
			{
				path: 'chart',
				component: CharttestComponent,
			},
			{
				path: 'request',
				component: RequestComponent,
			},
			{
				path: 'request-details',
				component: RequestDetailsComponent,
			},
			{
				path: 'previously-asked-question',
				component: PreviouslyAskedQuestionComponent,
			},
			
			
>>>>>>> d9d6ae9d7158a701861c288c688887384543c9f5
		]
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
