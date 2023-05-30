import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-gitusers',
  templateUrl: './gitusers.component.html',
  styleUrls: ['./gitusers.component.sass'],
})
export class GitusersComponent implements OnInit {

  users: any;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.databaseService.getData().subscribe(data => {
      this.users = data;
    });
  }

  // editUser(id: string, user: any) {
    
  //   this.databaseService.putData(user, id);
    
  //   this.databaseService.(['/edit-user']);
  // }
}
