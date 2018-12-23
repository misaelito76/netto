import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


import { CrudService } from '../services/crud.service';    // CRUD services API
import {  Validators,FormGroup,FormBuilder} from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public clientForm: FormGroup; 
  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;


  constructor(
  
    public authService: AuthService,
    private router:Router,
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService  // Toastr service for alert message

  ) { }

  public noAdmin: any = null;
  public isAdmin: any = null;
  public userUid: string = null;

  ngOnInit() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
        this.nombreUsuario = auth.displayName;
        this.emailUsuario = auth.email;

        this.userUid = auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole => {
          this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
          // this.isAdmin = true;

        })
      }
      else {
        this.isLogin = false;
        this.isAdmin = false;
      }
    });
  }
  clientsForm() {
    this.clientForm = this.fb.group({
      FirstName: ['', [Validators.required, Validators.minLength(2)]],
      Address: ['' ,[Validators.required, Validators.minLength(2)]],
      Date:['' ,[Validators.required, Validators.minLength(2)]],
      time:['' ,[Validators.required]],
      email: ['', [Validators.required, Validators.minLength(4)]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      Instructions:['']
    })  
  }
    // Reset client form's values
    ResetForm() {
      this.clientForm.reset();
    }  
   
    submitclientData() {
      this.crudApi.addclient(this.clientForm.value); // Submit client data using CRUD API
      this.toastr.success(this.clientForm.controls['FirstName'].value + ' successfully added!'); // Show success message when data is successfully submited
      this.ResetForm();  // Reset form when clicked on reset button
      this.router.navigate(['admin-list']);  
     };
     

  logout() {
    this.authService.logoutUser();
    this.router.navigate(['home']);
  }
}