import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  loginUrl = 'https://testcustomer.linkeee.ir/v1';
  apiUrl = 'https://testshop.linkeee.ir/v1';

  token = localStorage.getItem('token');

  constructor(private http: HttpClient) {

  }

  public Login(data: any): Observable<object> {
    return this.http.post(`${this.loginUrl}/Account/SignIn`, data);
  }

  public getMarketerList(): Observable<object> {
    const headerDict = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get(`${this.apiUrl}/User/Marketer`, requestOptions);
  }

  public registration(data: any): Observable<object> {
    const headerDict = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post(`${this.apiUrl}/User/RegisterMarketer`,data, requestOptions);
  }


}
