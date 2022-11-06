import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient,
    private router : Router
    ) {}

  Adduser(data: any) {
    return this.http.post<any>(
      'http://localhost:8421/user/usersignup',
      data
    );
  }
  

  async loginUser(data: any): Promise<any> {
    this.clearData();

    const user: any = await this.http
      .post('http://localhost:8421/user/userLogin', data)
      .toPromise();

    console.log(user);

    if (user.token && user.result) {
      localStorage.setItem('token', user.token);
      localStorage.setItem('isLoggedIn', JSON.stringify(true));
      localStorage.setItem('user', JSON.stringify(user.result));
    }

    return user;
  }

  clearData() {
    localStorage.clear();
  }






  logout(){
    let removeItem = localStorage.removeItem("token")
    if(removeItem == null){
      this.router.navigate(['login'])
    }
  }



  // putUser(data: any, _id: number) {
  //   data._id = _id;
  //   return this.http.post<any>(
  //     'http://localhost:8421/user/updateuser',
  //     data
  //   );
  // }
  putUser(_id: any, data: any) {
    let userData = { ...data, _id };
    console.log(userData)
    return this.http.post<any>(
        'http://localhost:8421/user/updateuser',userData);
  }


  IsLog() {
    return !!localStorage.getItem('token');
  }
}



