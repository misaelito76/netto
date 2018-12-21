
import { AuthService } from '../../services/auth.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../../services/crud.service';
import { ActivatedRoute, Router } from "@angular/router"; // ActivatedRoue is used to get the current associated components information.
import { Location } from '@angular/common';  // Location service is used to go back to previous component
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-admin-update-schedule',
  templateUrl: './admin-update-schedule.component.html',
  styleUrls: ['./admin-update-schedule.component.css']
})
export class AdminUpdateScheduleComponent implements OnInit {
  editForm: FormGroup;  // Define FormGrouupdate-schedule's edit form

  constructor(

    private crudApi: CrudService,       // Inject CRUD API in constructor
    private fb: FormBuilder,            // Inject Form Builder service for Reactive forms
    private location: Location,         // Location service to go back to previous component
    private actRoute: ActivatedRoute,   // Activated route to get the current component's inforamation
    private router: Router,             // Router service to navigate to specific component
    private toastr: ToastrService,       // Toastr service for alert message
    public authService: AuthService // Login
  ) { }

  public isAdmin: any = null;
  public userUid: string = null;

  ngOnInit() {

    this.authService.isAuth().subscribe(auth => {
      if (auth) {

        this.getCurrentUser();
        


        this.updateScheduleData();   // Call updateStudentData() as soon as the component is ready 
        const id = this.actRoute.snapshot.paramMap.get('id');  // Getting current component's id or information using ActivatedRoute service
        this.crudApi.getOneclient(id).subscribe(data => {
          this.editForm.setValue(data)  // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive form 
        })
      }

      // Login
      else {
        this.router.navigate(['login']);
      }
    });
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole => {
          this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
          // this.isAdmin = true;
        })
      }

      else {
        this.router.navigate(['home']);
      }

    })
  }

  get id() {
    return this.editForm.get('id');
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
      id: [''],
      FirstName: ['', [Validators.required, Validators.minLength(2)]],
      Adress: ['', [Validators.required, Validators.minLength(2)]],
      Date: ['', [Validators.required, Validators.minLength(2)]],
      time: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.minLength(4)]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      Instructions: ['']
    })
  }

  // Go back to previous component
  goBack() {
    this.location.back();
  }

  // Below methods fire when somebody click on submit button
  updateForm() {
    this.crudApi.updateclient(this.editForm.value);       // Upupdate-schedule data using CRUD API
    this.toastr.success(this.editForm.controls['FirstName'].value + ' updated successfully');   // Show succes message when data is successfully submited
    this.router.navigate(['schedule-cleaning']);               // Navigatupdate-schedule's list page update-schedule data is updated
  }
  ResetForm() {
    this.editForm.reset();
  }
}