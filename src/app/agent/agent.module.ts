import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BaseComponent } from './base/base.component';

import { MatToolbarModule, MatIconModule, MatListModule, MatButtonModule,MatMenuModule,MatInputModule,MatTableModule,MatPaginatorModule,MatSortModule, MatTabsModule, MatCardModule} from  '@angular/material';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [DashboardComponent, HeaderComponent, FooterComponent, BaseComponent, EditProfileComponent],
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
    MatTabsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatCardModule,
    

    
  ],
  exports: [
  DashboardComponent,
  EditProfileComponent,
  ]
})
export class AgentModule { }
