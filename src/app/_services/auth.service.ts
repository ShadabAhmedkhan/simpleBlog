import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://localhost:44347/api/auth';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(UserName: string, Password: string,Email: string): Observable<any> {
    return this.http.post(AUTH_API, {
      Email,
      UserName,
      Password
    }, httpOptions);
  }

  register(UserName: string, Email: string, Password: string,FirstName: string,LastName: string,Phone: string): Observable<any> {
    return this.http.post(AUTH_API + '/registration', {
      UserName,
      Email,
      Password,
      FirstName,
      LastName,
      Phone
    }, httpOptions);
  }
}
