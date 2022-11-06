import { Component, importProvidersFrom, OnInit } from '@angular/core'
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
} from '@angular/forms'
import { CrudService } from '../../service/user.service'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { switchAll } from 'rxjs'
import Swal from 'sweetalert2'
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  simpleAlert() {
    Swal.fire('Register Successfully')
  }
  registerForm!: FormGroup
  submitted = false

  constructor(
    private formBuilder: FormBuilder,
    private CrudService: CrudService,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        firstname: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z]+$'),
        ]),
        lastname: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z]+$'),
        ]),
        addressline1: new FormControl('', [
          Validators.required,
        ]),
        addressline2: ['', Validators.required],
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        retypepassword: new FormControl('', [Validators.required]),
        phone: new FormControl('', [
          Validators.required,
          Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
        ]),
        state: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z]+$'),
        ]),
        city: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z]+$'),
        ]),
      },
      {
        validators: this.MustMatch('password', 'retypepassword'),
      },
    )
  }
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName]
      const matchingControl = formGroup.controls[matchingControlName]
      if (matchingControl.errors && !matchingControl.errors['MustMatch']) {
        return
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ MustMatch: true })
      } else {
        matchingControl.setErrors(null)
      }
    }
  }
  // validations
  get firstname() {
    return this.registerForm.get('firstname')
  }
  get email() {
    return this.registerForm.get('email')
  }
  get lastname() {
    return this.registerForm.get('lastname')
  }
  get addressline1() {
    return this.registerForm.get('addressline1')
  }
  get state() {
    return this.registerForm.get('state')
  }
  get city() {
    return this.registerForm.get('city')
  }
  get phone() {
    return this.registerForm.get('phone')
  }
  get password() {
    return this.registerForm.get('password')
  }
  get retypepassword() {
    return this.registerForm.get('retypepassword')
  }
  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls
  }

  // Api
  addUser(): any {
    this.submitted = true
    if (this.registerForm.invalid) {
      Swal.fire('Please Fill the Form')
      return
    }
    const data = this.registerForm.value
    delete data['retypepassword']
    this.spinner.show()
    console.log(data)

    this.CrudService.Adduser(data).subscribe((res) => {
      console.log(res)

      if (res.status === true) {
        setTimeout(() => {
          this.spinner.hide()
        }, 1000)

        this.toastr.success(res.message)
        localStorage.setItem('token', res.token)
        localStorage.setItem('user', JSON.stringify(res.result))
        this.router.navigate(['/login'])
      } else {
        this.toastr.success('Invalid Credentials')
      }
    })
  }

  Reset() {
    this.submitted = false
    this.registerForm.reset()
  }
}
