import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.sass']
})
export class UserEditComponent implements OnInit {
  userForm: FormGroup | undefined;

  
  
    constructor(private formBuilder: FormBuilder, private databaseService: DatabaseService) { }
  
    ngOnInit() {
      this.userForm = this.formBuilder.group({
        login: ['', Validators.required],
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        location: ['', Validators.required]
      });
    }
    
    // saveUser() {
      
    //   const updatedUser = this.userForm.value;
            
  
    //         this.databaseService.navigate(['/users']);
    // }
  }
  

