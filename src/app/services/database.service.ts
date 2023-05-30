import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private baseUrl = 'http://localhost:8000'; 

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/my_git_users `);
  }

  public postData(users: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/my_git_users`, users);
  }
  public putData(id: string, users: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/my_git_users/${id}`, users);
  }

  public deleteData(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/my_git_users/${id}`);
  }
}
