import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:44387/api/Auth';

  constructor(private http: HttpClient) { }

  authUser(email: any, password: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post(this.apiUrl, { "email": email, "password": password, "roles": 1 }, { headers });
  }
}
