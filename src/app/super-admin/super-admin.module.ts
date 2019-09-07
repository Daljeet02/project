import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BaseComponent } from './base/base.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule, MatIconModule, MatListModule, MatButtonModule,MatMenuModule,MatInputModule,MatTableModule,MatPaginatorModule,MatSortModule, MatTabsModule, MatCardModule} from  '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RequestComponent } from './request/request.component';
import { AgentsComponent } from './agents/agents.component';
import { CustomerComponent } from './customer/customer.component';
import { ReportComponent } from './report/report.component';
/* Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';

// Load FusionCharts Individual Charts
import * as Charts from 'fusioncharts/fusioncharts.charts';*/

@NgModule({
  declarations: [
                  AdminDashboardComponent, BaseComponent, HeaderComponent, 
                  FooterComponent, RequestComponent, AgentsComponent, CustomerComponent, ReportComponent,
                  

                ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatCardModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatCheckboxModule,
  
    
    
  ],
  exports: [
    AdminDashboardComponent,
    RequestComponent,
    AgentsComponent,
    CustomerComponent,
    
    ]
})
export class SuperAdminModule { }
