import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AgentModule } from './agent/agent.module';
<<<<<<< HEAD
import { SuperAdminModule } from './super-admin/super-admin.module';
=======
>>>>>>> d9d6ae9d7158a701861c288c688887384543c9f5
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import components here
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule }    from '@angular/common/http';
<<<<<<< HEAD

=======
>>>>>>> d9d6ae9d7158a701861c288c688887384543c9f5

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
<<<<<<< HEAD
 
=======
    
>>>>>>> d9d6ae9d7158a701861c288c688887384543c9f5
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgentModule,
<<<<<<< HEAD
    SuperAdminModule,
=======
>>>>>>> d9d6ae9d7158a701861c288c688887384543c9f5
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
