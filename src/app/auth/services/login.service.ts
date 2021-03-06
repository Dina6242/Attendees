import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Login } from '../interfaces/login';
import { LoginRes } from '../interfaces/login-res';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(credentials: Login): Observable<LoginRes> {
    return this.http.post<LoginRes>(`${environment.apiUrl}auth/login`, credentials);
  }
}
