import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


interface UserData {
  email: string;
  username: string;
  name: string;
  location: string;
  id: string;
}
@Component({
  selector: 'app-user-edit',
  templateUrl: 'user-edit.component.html',
  styleUrls: ['user-edit.component.sass'],

})
export class UserEditComponent implements OnInit {
  newUser = {
    name: '',
    email: '',
    location: ''
  };


  editing = false;
  modalOpen: boolean = false;

  constructor(
    private databaseService: DatabaseService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public user: any,
    private dialogRef: MatDialogRef<UserEditComponent>
  ) { }

  ngOnInit() {
    MAT_DIALOG_DATA
  }

  saveChanges() {

    const id = this.user.id;

    this.databaseService.putData(id, this.user).subscribe(() => {
      this.user.name = this.newUser.name;
      this.user.email = this.newUser.email;
      this.user.location = this.newUser.location;
      this.modalOpen = false;
      this.resetForm();
      this.router.navigateByUrl('/gitusers');
      this.dialogRef.close();
      location.reload()
    });


  }

  closeModal() {
    this.dialogRef.close()
  }

  toggleEdit() {
    this.editing = !this.editing;
    if (!this.editing) {
      this.resetForm();
      this.modalOpen = true;
    } else {
      this.modalOpen = false;
    }
  }

  resetForm() {
    this.newUser = { name: '', email: '', location: '' }
  }


}



