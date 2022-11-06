import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
loggedinUser:any;
dialogStyle = 'none';

userId: any;
user: any = {
  firstname: '',
  lastname: '',
  address: { addressline1: '', addressline2: '', city: '', state: '' },
  email: '',
  phone: '',
};

  constructor(
    private Apiservice: CrudService,
    private router: Router,
    private toastr: ToastrService,


  ) { }

  ngOnInit(): void {
    this.loggedinUser = JSON.parse(localStorage.getItem('user') as any);

  }
  dialogop() {
    this.user = JSON.parse(localStorage.getItem('user') as any);
    this.userId = this.user._id;
    this.dialogStyle = 'block';
  }
  dialogclose() {
    this.dialogStyle = 'none';
  }
  updateUser(data: any) {
this.Apiservice.putUser(this.userId,data).subscribe((res:any)=>{
  console.log(res);
  
  if(res.status){
    this.toastr.success("Update Succefully");
    Swal.fire("Update Successfully")
  
    localStorage.setItem('user', JSON.stringify(res.result))
  console.log(res.result);
  this.ngOnInit();
    this.dialogclose();

  }
})
  }

  
 
}
