import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { UserEditComponent } from '../../user-edit/user-edit.component';

@Component({
  selector: 'app-gitusers',
  templateUrl: './gitusers.component.html',
  styleUrls: ['./gitusers.component.sass'],
  providers: [ModalController]
})
export class GitusersComponent implements OnInit {

  users: any;

  constructor(private databaseService: DatabaseService, private modalController: ModalController) { }

  ngOnInit() {
    this.databaseService.getData().subscribe(data => {
      this.users = data;

     });
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: UserEditComponent,
      componentProps: {
        user: this.users
      }
      
    });

    console.log(modal)


    
    modal.onDidDismiss().then((data) => {
      if (data && data.data) {
        this.users = data.data;
      }
    });
    
    return await modal.present();
  }
 
 

}
