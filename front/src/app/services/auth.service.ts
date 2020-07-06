import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = "http://localhost:8000/api/";

  token: string = localStorage.getItem('token');

  httpHeaders: any = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  };

  constructor( public http: HttpClient, public authService: AuthService ) { }

  // Login de usuário
  loginUser( form ): Observable<any> {
    return this.http.post( this.apiUrl + 'loginUser', form, this.httpHeaders );
  }

  // Logout de usuário
  logout() {
    this.httpHeaders.headers.Authorization = 'Bearer ' + this.token;
    return this.http.post( this.apiUrl + 'logout', this.httpHeaders );
  }

  // Autentica o usuário no sistema
  auth(): Observable<any> {
    this.httpHeaders.headers.Authorization = 'Bearer ' + this.token;
    return this.http.post(this.apiUrl + 'auth', this.httpHeaders);
  }
}
