import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {fade,slide} from '../../animations';
import { Location } from '@angular/common';  // Location service is used to go back to previous component


@Component({
  selector: 'app-component-name',
  templateUrl: './component-name.component.html',
  styleUrls: ['./component-name.component.css'],
  animations:[
    fade,
    slide
  ]
})
export class ComponentNameComponent {
  public clientForm: FormGroup;
  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
    public authService: AuthService,
    private router: Router,
    private location: Location,
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


   // Go back to previous component
   goBack() {
    this.location.back();
  }


  logout() {
    this.authService.logoutUser();
    this.router.navigate(['home']);
  }

}
