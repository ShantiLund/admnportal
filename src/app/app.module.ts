import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PligrimComponent } from './pligrim/pligrim.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import{HttpClientModule} from '@angular/common/http';

import { AgmCoreModule} from '@agm/core';

import {AgmDirectionModule} from 'agm-direction';







@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDQlZ9Ez5_4zHJzFtSD99Ztgp_mYXFShf0'
    // }),
    // AgmDirectionModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SignupComponent
   
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
