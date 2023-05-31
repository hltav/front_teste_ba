import { DatabaseService } from './../../services/database.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.sass'],
  providers:[ModalController]
})
export class UserEditComponent implements OnInit {
  userForm: FormGroup | undefined;

  users: any

  
  
    constructor(private formBuilder: FormBuilder,  private modalController: ModalController, private databaseService: DatabaseService) { }
  
    ngOnInit() {
      this.userForm = this.formBuilder.group({
        login: ['', Validators.required],
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        location: ['', Validators.required]
      });
    }
    

    closeModal() {
      this.modalController.dismiss();
    }
  
    saveEdition() {
      
      this.modalController.dismiss(this.users);
    }
    
   
  }
  

