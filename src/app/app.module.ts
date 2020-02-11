import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';



import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserService } from './user/user.service';
import { ThemeswitcherComponent } from './themeswitcher/themeswitcher/themeswitcher.component';
import { TimerComponent } from './timer/timer.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeswitcherComponent,
    TimerComponent,
    LoginComponent,
    NavComponent,
    DashboardComponent
  ],
  entryComponents:[
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
