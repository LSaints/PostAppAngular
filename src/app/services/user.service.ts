import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:44387/api/Users';

  constructor(private http: HttpClient) { }

  createUser(username: any, email: any, password: any): Observable<any> {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
    return this.http.post(this.apiUrl, {
      "username": username,
      "email": email,
      "password": password,
      "roles": 1
    }, { headers });
  }
}
