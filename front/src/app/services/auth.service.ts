import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // A URL da API
  apiUrl: string = "http://localhost:8000/api/";

  token: string = localStorage.getItem('token');

  httpHeaders: any = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  
  constructor( public http: HttpClient, public authService: AuthService ) { }

  // Login de usuário
  loginUser( form ): Observable<any> {
    return this.http.post( this.apiUrl + 'loginUser', form, this.httpHeaders );
  }

  //Logout de usuário
  logout(){
    this.httpHeaders.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    return this.http.post( this.apiUrl + 'logout', this.httpHeaders );
  }

  // Autentica o usuário no sistema
  auth():Observable<any>{
    console.log('Bearer ' + localStorage.getItem('token'));
    console.log(this.httpHeaders);
		return this.http.post(this.apiUrl + 'getDetails', this.httpHeaders);
  }
}
