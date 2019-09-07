import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AgentModule } from './agent/agent.module';
import { SuperAdminModule } from './super-admin/super-admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import components here
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule }    from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgentModule,
    SuperAdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
