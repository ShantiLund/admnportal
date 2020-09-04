import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {SigninComponent } from '../../signin/signin.component';
import {SignupComponent } from '../../signup/signup.component';
import{PligrimComponent} from '../../pligrim/pligrim.component';
import{CustomerComponent} from '../../customer/customer.component';
import {AddressComponent} from '../../address/address.component';
import { HttpClientModule } from '@angular/common/http';
import {AngularFireModule} from 'angularfire2';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AgmCoreModule} from '@agm/core';

import {AgmDirectionModule} from 'agm-direction';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    HttpClientModule,
    
    AngularFireModule.initializeApp({
      apiKey:  "AIzaSyB7hA3gZ7mxroXul7NNLZ_w_r5wdj7sQJg",
      authDomain: "practice-b992b.firebaseapp.com",
      projectId: "practice-b992b",
      storageBucket: "practice-b992b.appspot.com"
      
    }),
    AngularFireStorageModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQlZ9Ez5_4zHJzFtSD99Ztgp_mYXFShf0'
    }),
    AgmDirectionModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    SigninComponent,
    PligrimComponent,
    CustomerComponent,
    AddressComponent
  ]
})

export class AdminLayoutModule {}
