import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {

  private apiUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) {}


  getCustomers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/customers`);
  }

  // Crea los libros
  createCustomers(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/customers`, data);
  }
}
