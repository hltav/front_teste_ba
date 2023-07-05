import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubUserService {

  public apiUrl = `https://api.github.com/users/`

  constructor(public http: HttpClient) { }

  getUser(username: string) {
    console.log(username)
    const url = `${this.apiUrl}${username}`;
    return this.http.get(url);
  }

}

