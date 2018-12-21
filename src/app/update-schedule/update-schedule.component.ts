import { AuthService } from './../services/auth.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../services/crud.service';
import { ActivatedRoute, Router } from "@angular/router"; // ActivatedRoue is used to get the current associated components information.
import { Location } from '@angular/common';  // Location service is used to go back to previous component
import { ToastrService } from 'ngx-toastr';

import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-update-schedule',
  templateUrl: './update-schedule.component.html',
  styleUrls: ['./update-schedule.component.css']
})

export class UpdateScheduleComponent implements OnInit {
  editForm: FormGroup;  // Define FormGrouupdate-schedule's edit form
   clientForm: FormGroup
  constructor(
   public authService:AuthService,
    private crudApi: CrudService,       // Inject CRUD API in constructor
    private fb: FormBuilder,            // Inject Form Builder service for Reactive forms
    private location: Location,         // Location service to go back to previous component
    private actRoute: ActivatedRoute,   // Activated route to get the current component's inforamation
    private router: Router,             // Router service to navigate to specific component
    private toastr: ToastrService       // Toastr service for alert message
  ){ }

  ngOnInit() {
    this.updateForm()
  }

  // Accessing form control using getters
  get FirstName() {
    return this.editForm.get('FirstName');
  }

  get Adress() {
    return this.editForm.get('Adress');
  }
  get Date() {
    return this.editForm.get('Date');
  }
  get email() {
    return this.editForm.get('email');
  }
  get time() {
    return this.editForm.get('time');
  }

  get mobileNumber() {
    return this.editForm.get('mobileNumber');
  }  
  get Instructions() {
    return this.editForm.get('Instructions');
  }  

  // Contains Reactive Form logic
  updateScheduleData() {
    this.editForm = this.fb.group({
      FirstName: ['', [Validators.required, Validators.minLength(2)]],
      Adress: ['' ,[Validators.required, Validators.minLength(6)]],
      Date:['' ,[Validators.required]] ,
      time:['' ,[Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      Instructions:['', [Validators.required, Validators.minLength(10)]],
    })
  }

  // Go back to previous component
  goBack() {
    this.location.back();
  }

  // Below methods fire when somebody click on submit button
  updateForm(){
    this.crudApi.updateclient(this.editForm.value);       // Upupdate-schedule data using CRUD API
    this.toastr.success(this.editForm.controls['FirstName'].value + ' updated successfully');   // Show succes message when data is successfully submited
    this.router.navigate(['my-schedule']);               // Navigatupdate-schedule's list page update-schedule data is updated
  }
  ResetForm() {
    this.editForm.reset();
  } 

}