import { lastValueFrom } from 'rxjs';
import { DatabaseService } from './../../services/database.service';
import { Component } from '@angular/core';
import { GithubUserService } from 'src/app/services/github-user-service.service';


interface UserData {
  email: string;
  login: string;
  name: string;
  location: string;
}

@Component({
  selector: 'app-search-users-form',
  templateUrl: './search-users-form.component.html',
  styleUrls: ['./search-users-form.component.sass']
})
export class SearchUsersFormComponent {
  
  user: any;
  searchUserName: string = ''
  http: any;
  apiUrl: any;
 
    
  constructor(private githubUserService: GithubUserService, private databaseService: DatabaseService) { }

  async searchUser(username: string) {
    const source = this.githubUserService.getUser(username) 
    const data = await lastValueFrom(source) 
    this.user = data as UserData;
    
    const { email, login, name, location } = data as UserData;

    console.log({name: name, Login: login, Location: location, email: email})

  }
  async pushData(username : string) {
    const data= {username };
    try {

      const response = await lastValueFrom(this.databaseService.postData(data));
      console.log(response);
    } catch (error) {
      console.error(error, 'Serviço Indisponível!');
    }
  }
   
}
  

