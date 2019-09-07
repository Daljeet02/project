import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BaseComponent } from './base/base.component';
import { RequestComponent } from './request/request.component';
import { AgentsComponent } from './agents/agents.component';
import { CustomerComponent } from './customer/customer.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
		path: '',
		component: BaseComponent,
		children: [
			{
				path: 'super-admin/admin-dashboard',
				component:  AdminDashboardComponent,
			},
			{
				path: 'super-admin/request',
				component:  RequestComponent,
			},
			{
				path: 'super-admin/agents',
				component: AgentsComponent,
			},
			{
				path: 'super-admin/customer',
				component: CustomerComponent,
			},
			{
				path: 'super-admin/report',
				component: ReportComponent,
			},
			
		]
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
