//Services

import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { CrudService } from './services/crud.service';
import { AuthGuard } from './guards_/auth.guard';
//Modules

import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule} from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatInputModule,} from '@angular/material/input';
import {MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
   MatIconModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule, 
  
  } from '@angular/material';


import {MatDatepicker} from '@angular/material/datepicker';
//Components
import {MatFormFieldModule} from '@angular/material/form-field';
import { NotFoundPageComponent } from './componentes_/not-found-page/not-found-page.component';
import { AddClientComponent } from './schedule-cleaning/schedule-cleaning.component';
import { UpdateScheduleComponent } from './update-schedule/update-schedule.component';
import { MyScheduleComponent } from './my-schedule/my-schedule.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import{LoginComponent} from './componentes_/users/login/login.component';
import{RegisterComponent} from './componentes_/users/register/register.component'
import{AdminListComponent}from './admin-list/admin-list.component';
import{ProfileComponent} from './componentes_/users/profile/profile.component';
//Firebase

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { GrdFilterPipe } from './services/search.service';
import { ComponentNameComponent } from './component-name/component-name.component';
import { LayoutModule } from '@angular/cdk/layout';


const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  { path: 'schedule-cleaning', component: AddClientComponent, canActivate:[AuthGuard]},
  { path: 'my-schedule', component: MyScheduleComponent, canActivate:[AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard] },
  { path: 'admin-list', component: AdminListComponent, canActivate:[AuthGuard]   },
  { path: 'update-schedule/:id', component: UpdateScheduleComponent, canActivate:[AuthGuard]   },
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    UpdateScheduleComponent,
    AdminListComponent,
    RegisterComponent,
    LoginComponent,
    NotFoundPageComponent,
    HomeComponent,
    ProfileComponent,
    ProfileComponent,
    MyScheduleComponent,
    GrdFilterPipe,
    ComponentNameComponent

    
    
  ],
  imports: [RouterModule,CommonModule,RouterModule,
            RouterModule.forRoot(routes),
            BrowserModule,CommonModule,
            AngularFireModule.initializeApp(environment.firebase), // Main Angular fire module 
            AngularFireDatabaseModule,  // Firebase database module 
            ReactiveFormsModule,        // Reactive forms module
            AppRoutingModule,           // Main routing module
            BrowserAnimationsModule,    // Required animations module for Toastr
            FormsModule,
            AngularFireStorageModule,
            MatInputModule,
            MatButtonModule,
            MatToolbarModule,
            MatSidenavModule,
            MatFormFieldModule,
            MatDatepickerModule,
          
            MatNativeDateModule,
        

       AngularFireAuthModule,     
       ToastrModule.forRoot({
       timeOut: 3000,
       positionClass: 'toast-bottom-right',
       preventDuplicates: true,      
    }),

    NgxPaginationModule,

    LayoutModule,

    MatIconModule,

    MatListModule  // NGX pagination module
    
  ],
  exports:[MatInputModule,MatButtonModule,MatToolbarModule,MatDatepickerModule

  ],
  providers: [AuthService,UserService, AuthGuard,AngularFireAuth,AngularFirestore,CrudService,MatSidenavModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
