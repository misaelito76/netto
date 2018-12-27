
import {fade,slide} from '../../animations'
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {  FormGroup } from '@angular/forms';
import { CrudService } from '../services/crud.service';  // CRUD API service class
import { ClientCleanning } from '../shared/clientCleanning';   // client interface class for Data types.
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css'],
 
animations:[
  fade,
  slide
]


})
export class AdminListComponent implements OnInit {
  public clientForm: FormGroup;
   //Busqueda
   public searchText: string;
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
          
        })
      }
    })
  }



  getListClients() {
    this.crudApi.getAllclients()
      .subscribe(clients => {
        this.clients = clients;
      });
    this.router.navigate(['admin-list'])
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
    this.router.navigate(['profile']);
  };

}
