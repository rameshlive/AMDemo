import { LocalusersstorageService } from './localusersstorage.service';
import { CartService } from './cart.service';
import { environment } from './../environments/environment';
import { RegisterService } from './register.service';
import { MessageService } from './message.service';
import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { FlexLayoutModule } from "@angular/flex-layout";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserService } from './user/user.service';
import { ThemeswitcherComponent } from './themeswitcher/themeswitcher/themeswitcher.component';
import { TimerComponent } from './timer/timer.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent ,NgbdCarouselBasic} from './home/home.component';
import { BottomsheetComponent } from './bottomsheet/bottomsheet.component';
import { AlertpopupComponent } from './alertpopup/alertpopup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WishlistinfoComponent } from './wishlistinfo/wishlistinfo.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { EmptyComponent } from './shared/empty/empty.component';
@NgModule({
  declarations: [
    AppComponent,
    ThemeswitcherComponent,
    TimerComponent,
    LoginComponent,
    NavComponent,
    DashboardComponent,
    HomeComponent,
    BottomsheetComponent,
    AlertpopupComponent,
    PagenotfoundComponent,
    WishlistinfoComponent,
    RegisterComponent,
    ProductComponent,
    EmptyComponent,
    NgbdCarouselBasic
  ],
  entryComponents:[
    TimerComponent,
    BottomsheetComponent,
    AlertpopupComponent,
    WishlistinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    NgbModule
    
  ],
  providers: [UserService,AuthGuard,MessageService,RegisterService,CartService,LocalusersstorageService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
