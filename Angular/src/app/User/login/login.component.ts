import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { CrudService } from '../../service/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  simpleAlert(){
    Swal.fire("Login Successfully")
  }
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private CrudService: CrudService,
    private toastr: ToastrService,
    private router:Router ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
     
      email: new FormControl('',[ Validators.required,Validators.email]),
      password:new FormControl('',[ Validators.required,Validators.minLength(8)]),
   
  })
  localStorage.clear();
  }

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  loginUser(): any {
  
    this.CrudService.loginUser(this.loginForm.value).then((res) => {
      console.log(res);
      
      if (res.status) {
      
 
        this.toastr.success(res.message);
        localStorage.setItem("token",res.Token)
         this.router.navigate(["/dashboard"]);
      } else {
        this.toastr.success('Not valid');
        alert("Not Valid ")
      }
      
    });
   
  }
 

}
