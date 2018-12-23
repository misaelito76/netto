import { FormsModule} from '@angular/forms';
import { NotFoundPageComponent } from './componentes_/not-found-page/not-found-page.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { CrudService } from './services/crud.service';
import { AuthGuard } from './guards_/auth.guard';
import { LoginGuard } from './guards_/loginguard';
import { RouterModule,Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AddClientComponent } from './schedule-cleaning/schedule-cleaning.component';
import { UpdateScheduleComponent } from './update-schedule/update-schedule.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import{LoginComponent} from './componentes_/users/login/login.component';
import{RegisterComponent} from './componentes_/users/register/register.component'
import{AdminListComponent}from './admin-list/admin-list.component';
import { AdminUpdateScheduleComponent } from './ADMIN/admin-update-schedule/admin-update-schedule.component'
import{ProfileComponent} from './componentes_/users/profile/profile.component'
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MyScheduleComponent } from './my-schedule/my-schedule.component';



const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  { path: 'schedule-cleaning', component: AddClientComponent},
  { path: 'my-schedule', component: MyScheduleComponent},
  {path: 'profile', component: ProfileComponent },
  { path: 'admin-list', component: AdminListComponent, canActivate:[AuthGuard]   },
  { path: 'admin-update-schedule/:id', component: AdminUpdateScheduleComponent },
  { path: 'update-schedule/:id', component: UpdateScheduleComponent },

  {path: '**', component: NotFoundPageComponent}
];

// Import RouterModule and inject routes array in it and dont forget to export the RouterModule



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
    AdminUpdateScheduleComponent,
    ProfileComponent,
    NavBarComponent,
    MyScheduleComponent,

    
    
  ],
  imports: [RouterModule,CommonModule,RouterModule,
            RouterModule.forRoot(routes),
            BrowserModule,CommonModule,
            AngularFireModule.initializeApp(environment.firebase), // Main Angular fire module 
            AngularFireDatabaseModule,  // Firebase database module 
            ReactiveFormsModule,        // Reactive forms module
            AppRoutingModule,           // Main routing module
            BrowserAnimationsModule,    // Required animations module for Toastr
            FormsModule,AngularFireStorageModule,

       AngularFireAuthModule,     
       ToastrModule.forRoot({
       timeOut: 3000,
       positionClass: 'toast-bottom-right',
       preventDuplicates: true,      
    }),

    NgxPaginationModule  // NGX pagination module
    
  ],
  providers: [AuthService,UserService, AuthGuard,AngularFireAuth,AngularFirestore,CrudService],
  bootstrap: [AppComponent],
})
export class AppModule { }
