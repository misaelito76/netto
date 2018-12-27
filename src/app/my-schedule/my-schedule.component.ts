import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { ClientCleanning } from '../shared/clientCleanning';   // client interface class for Data types.
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';    // CRUD services API
import {  FormGroup } from '@angular/forms'; // Reactive form services

@Component({
  selector: 'app-my-schedule',
  templateUrl: './my-schedule.component.html',
  styleUrls: ['./my-schedule.component.css']
})
export class MyScheduleComponent implements OnInit {
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
    this.router.navigate(['my-schedule'])
  }

  onDeleteclient(idClient: string): void {
    const confirmation = confirm('Are you sure?');
    if (confirmation) {
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
    this.router.navigate(['profile']);
  };

}
