  import { Component, OnInit } from '@angular/core';
  import { AuthService } from '../../../services/auth.service';
  import {  FormGroup } from '@angular/forms';
  import { CrudService } from '../../../services/crud.service';  // CRUD API service class
  import { ClientCleanning } from '../../../shared/clientCleanning';   // client interface class for Data types.
  import { ToastrService } from 'ngx-toastr';
  import { Router } from '@angular/router';
  import {fade,slide} from '../../../../animations'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations:[
    fade,
    slide
  ]
})
export class ProfileComponent implements OnInit {

    public clientForm: FormGroup;
    constructor(
      private authService: AuthService,
      private router: Router,
      public crudApi: CrudService, // Inject client CRUD services in constructor.
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
  
  
  
    getListClients() {
      this.crudApi.getAllclients()
        .subscribe(clients => {
          this.clients = clients;
        });
      this.router.navigate(['profile'])
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
      this.crudApi.addclient(this.clientForm.value); 
      this.toastr.success(this.clientForm.controls['FirstName'].value + ' successfully added!');
      this.ResetForm();  
      this.router.navigate(['admin-list']);
    };
  
  }
  