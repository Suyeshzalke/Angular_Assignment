import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {CrudService} from './service/user.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent   {
  title = 'assignment';
loggedinUser:any;

  simpleAlert(){
    Swal.fire("Logout Successfully")
  }
  constructor(private dialog: MatDialog,
    private router : Router,
    private CrudService : CrudService,
   
    ) {}
    ngOnInit(): void {
      this.loggedinUser = JSON.parse(localStorage.getItem('user') as any);
  
    }
loggedin(){
  return localStorage.getItem('token');

}


  logout(){
   localStorage.removeItem('token');
    
   }
}
