import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {SignUpForm} from '../model/SignUpForm';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_SIGNUP = environment.API_LOCAL+'signUp';

  constructor(private http : HttpClient) { }

  signUp(singUpForm : SignUpForm) : Observable<any>{
    return this.http.post(this.API_SIGNUP,singUpForm);
  }
}
