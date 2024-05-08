import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../../core/service/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  public login_url="https://fakestoreapi.com"
  public reg_url="https://fakestoreapi.com"
  constructor(private http: HttpClient, private api: ApiService) { }
  
  authLogin(user_login_dto:any): Observable<any>{
    return this.api.post(this.reg_url+'/auth/login',user_login_dto)
  }

  userRegister(user_dto: any): Observable<any>{
    return this.api.post(this.reg_url+'/users', user_dto)
  }
}
