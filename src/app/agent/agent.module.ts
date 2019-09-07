import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BaseComponent } from './base/base.component';

import { MatToolbarModule, MatIconModule, MatListModule, MatButtonModule,MatMenuModule,MatInputModule,MatTableModule,MatPaginatorModule,MatSortModule,MatTabsModule,MatCheckboxModule,MatSlideToggleModule} from  '@angular/material';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatBadgeModule} from '@angular/material/badge';
import { Component } from "@angular/core";
import { CharttestComponent } from './charttest/charttest.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import {MatFormFieldModule} from '@angular/material/form-field';



// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load fusion theme
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { RequestComponent } from './request/request.component';

import { MatCardModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { StatComponent } from './stat/stat.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import {MatDialogModule} from '@angular/material/dialog';
import {RefundPopupComponent} from './refund-popup/refund-popup.component';
import { PremiumServicePopupComponent } from './premium-service-popup/premium-service-popup.component';
import { PreviouslyAskedQuestionComponent } from './previously-asked-question/previously-asked-question.component';

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme)


@NgModule({
  declarations: [DashboardComponent, EditProfileComponent, HeaderComponent, FooterComponent, BaseComponent, CharttestComponent, RequestComponent, StatComponent, RequestDetailsComponent,RefundPopupComponent, PremiumServicePopupComponent, PreviouslyAskedQuestionComponent],
  imports: [
    CommonModule,
    AgentRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatTabsModule,
    FusionChartsModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSlideToggleModule
  


    
  ],
  exports: [
  DashboardComponent
  ],
  entryComponents: [RefundPopupComponent,
  PremiumServicePopupComponent],
})
export class AgentModule { }
