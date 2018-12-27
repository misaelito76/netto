import { AuthService } from './../services/auth.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../services/crud.service';
import { ActivatedRoute, Router } from "@angular/router"; 
import { Location } from '@angular/common';  
import { ToastrService } from 'ngx-toastr';
import {fade,slide} from '../../animations';
import { ClientCleanning } from '../shared/clientCleanning';
@Component({
  selector: 'app-update-schedule',
  templateUrl: './update-schedule.component.html',
  styleUrls: ['./update-schedule.component.css'],
  animations:[
    fade,
    slide
  ]
})

export class UpdateScheduleComponent implements OnInit {
  
  public clientForm: FormGroup;
  public clients: ClientCleanning[];
  public isAdmin: any = null;
  public userUid: string = null;
  public selectedClient: ClientCleanning;
  public First: string;
  public Email: string;
  public Mobile: string;
  public img: string;

  constructor(
   public authService:AuthService,
    private crudApi: CrudService,    
    private fb: FormBuilder,          
    private location: Location,        
    private actRoute: ActivatedRoute,   
    private router: Router,             
    private toastr: ToastrService       
  ){ }

  ngOnInit() {
    this.getCurrentUser();

    this.updateScheduleData();   
    const id = this.actRoute.snapshot.paramMap.get('id');  
    this.crudApi.getOneclient(id).subscribe(data => {
      this.clientForm.setValue(data) 
    })


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

  
  get id() {
    return this.clientForm.get('id');
  }

  get FirstName() {
    return this.clientForm.get('FirstName');
  }

  get Address() {
    return this.clientForm.get('Address');
  }
  get Date() {
    return this.clientForm.get('Date');
  }
  get email() {
    return this.clientForm.get('email');
  }
  get time() {
    return this.clientForm.get('time');
  }

  get mobileNumber() {
    return this.clientForm.get('mobileNumber');
  }  
  get Instructions() {
    return this.clientForm.get('Instructions');
  }  
  get useruid() {
    return this.clientForm.get('userUid')
  }


  updateScheduleData() {
    this.clientForm = this.fb.group({
      id:[''],
      userUid:[''],
      FirstName: ['', [Validators.required, Validators.minLength(2)]],
      Address: ['' ,[Validators.required, Validators.minLength(6)]],
      Date:['' ,[Validators.required]] ,
      time:['' ,[Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      Instructions:['', [Validators.required, Validators.minLength(10)]],
    })
  }


  goBack() {
    this.location.back();
  }


  updateForm(){
    this.crudApi.updateclient(this.clientForm.value);       
    this.toastr.success(this.clientForm.controls['FirstName'].value + ' updated successfully');   
    this.router.navigate(['profile']);           
  }
  ResetForm() {
    this.clientForm.reset();
  } 

}