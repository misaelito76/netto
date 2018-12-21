import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from '../shared/user';


import { ClientCleanning } from '../shared/clientCleanning';   // client interface class for Data types.
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { CrudService } from '../services/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services




@Component({
  selector: 'app-my-schedule',
  templateUrl: './my-schedule.component.html',
  styleUrls: ['./my-schedule.component.css']
})
export class MyScheduleComponent implements OnInit {
  public clientForm: FormGroup; 
    constructor(
      public authService: AuthService,
      private router:Router,
      public crudApi: CrudService,  // CRUD API services
      public fb: FormBuilder,       // Form Builder service for Reactive forms
      public toastr: ToastrService // Toastr service for alert message
    ) { }
  
    public clients: ClientCleanning[];
    public isAdmin: any = null;
    public userUid: string = null;
    public selectedClient: ClientCleanning;
    public First: string;
    public Email: string;
    public Mobile: string;
    public img: string;
  
  
    ngOnInit() {
  
      this.clientsForm(); 
      this.getListClients();
      this.getCurrentUser();
  
    }
  
    getCurrentUser() {
      this.authService.isAuth().subscribe(auth => {
        if (auth) {
          this.userUid = auth.uid;
          this.Email = auth.email;
  
          this.img = auth.photoURL;
  
          this.authService.isUserAdmin(this.userUid).subscribe(userRole => {
            this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
            // this.isAdmin = true;
          })
        }
      })
    }
  
   // Reactive client form
   clientsForm() {
    this.clientForm = this.fb.group({
      FirstName: ['', [Validators.required, Validators.minLength(2)]],
      Adress: ['' ,[Validators.required, Validators.minLength(6)]],
      Date:['' ,[Validators.required]] ,
      time:['' ,[Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      Instructions:['', [Validators.required, Validators.minLength(10)]],
    })  
  }

  
    getListClients() {
      this.crudApi.getAllclients()
        .subscribe(clients => {
          this.clients = clients;
        });
      this.router.navigate(['my-schedule'])
    }
  
    onDeleteclient(idClient: string): void {
      const confirmacion = confirm('Are you sure?');
      if (confirmacion) {
        this.crudApi.deleteclient(idClient);
      }
    }
  
    onPreUpdateclient(client: ClientCleanning) {
      console.log('CLIENT', client);
      this.crudApi.selectedClient = Object.assign({}, client);
    }
    ResetForm() {
      this.clientForm.reset();
    }
    submitclientData() {
      this.crudApi.addclient(this.clientForm.value); // Submit client data using CRUD API
      this.toastr.success(this.clientForm.controls['FirstName'].value + ' successfully added!'); // Show success message when data is successfully submited
      this.ResetForm();  // Reset form when clicked on reset button
      this.router.navigate(['admin-list']);
    };
  
  }
  