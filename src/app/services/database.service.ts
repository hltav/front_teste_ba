import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private baseUrl = 'https://app-ba-api.vercel.app/api/';

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}users`);
  }

  public postData(users: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}users`, users);
  }

  public putData(id: string, users: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}users/${id}`, users);
  }

  public deleteData(userIndex: any): Observable<any> {

    return this.http.delete<any>(`${this.baseUrl}users/${userIndex}`);
  }
}