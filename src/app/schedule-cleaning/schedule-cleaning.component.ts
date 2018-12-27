import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ClientCleanning } from '../shared/clientCleanning';
import {   Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import {fade,slide} from '../../animations'
@Component({
  selector: 'app-add-client',
  templateUrl: './schedule-cleaning.component.html',
  styleUrls: ['./schedule-cleaning.component.scss'],
  animations:[
    slide
  ]
})

export class AddClientComponent implements OnInit {
  public clientForm: FormGroup;  // Define FormGroup to client's form
 
  constructor(
    public authService: AuthService,
    private router:Router,
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService  // Toastr service for alert message
  ) { }
  @Input() userUid: string;
  public clients: ClientCleanning[];
  public isAdmin: any = null;
 
  public selectedClient: ClientCleanning;
  public First: string;
  public Email: string;
  public Mobile: string;
  public img: string;
 
  ngOnInit() {
    this.crudApi.getAllclients();  // Call GetclientsList() before main form is being called
    this.clientsForm(); 
    
    this.getCurrentUser();             // Call client form when component is ready
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
      Address: ['' ,[Validators.required, Validators.minLength(6)]],
      Date:['' ,[Validators.required]] ,
      time:['' ,[Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      Instructions:['', [Validators.required, Validators.minLength(10)]],
    })  
  }

  // Accessing form control using getters
  get FirstName() {
    return this.clientForm.get('FirstName');
  }
  

  get Address() {
    return this.clientForm.get('Address');
  }  
  get Date() {
    return this.clientForm.get('Date');
  }

  get time() {
    return this.clientForm.get('time');
  }
  get email() {
    return this.clientForm.get('email');
  }

  get mobileNumber() {
    return this.clientForm.get('mobileNumber');
  }
  get Instructions() {
    return this.clientForm.get('Instructions');
  }

  // Reset client form's values
  ResetForm() {
    this.clientForm.reset();
  }  
 
  submitclientData(clientForm: NgForm): void {
 if (clientForm.value.id == null) {
     clientForm.value.userUid = this.userUid;
    this.crudApi.addclient(this.clientForm.value);
    this.router.navigate(['profile']); // Submit client data using CRUD API
    this.toastr.success(this.clientForm.controls['FirstName'].value + ' successfully added!')}
    
    else {
      // Update
      this.crudApi.updateclient(clientForm.value);
      this.router.navigate(['profile']);
    } 
   };
   /*submitclientData(clientForm: NgForm): void {
    if (clientForm.value.id == null) {
      // New 
      clientForm.value.userUid = this.userUid;
      this.crudApi.addclient(clientForm.value);
      this.toastr.success(this.clientForm.controls['FirstName'].value + ' successfully added!');
    } else {
      // Update
      this.crudApi.updateclient(clientForm.value);
      this.router.navigate(['profile']);*/

   
    }
