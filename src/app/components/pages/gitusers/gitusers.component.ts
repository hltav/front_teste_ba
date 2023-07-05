import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { ToastService } from 'angular-toastify';
import Swal from 'sweetalert2';
import { ModalMapComponent } from '../../modal-map/modal-map.component';

interface UserData {
  email: string;
  username: string;
  name: string;
  location: string;
  id: string;
}

@Component({
  selector: 'app-gitusers',
  templateUrl: './gitusers.component.html',
  styleUrls: ['./gitusers.component.sass'],
  providers: [ModalController]
})
export class GitusersComponent implements OnInit {

  users: any;
  user: any;
  dados: any[] = [];
  dadosCarregados = false;

  @ViewChild('deleteConfirmationDialog') deleteConfirmationDialog!: TemplateRef<any>;

  constructor(
    private databaseService: DatabaseService,
    private toast: ToastService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.databaseService.getData().subscribe(data => {
      this.users = data;
      const { id } = data
    });
  }

  selectUser(user: string) {
    this.searchUser(user);
    console.log(user);
    this.openModal(user);
  }

  searchUser(user: string): any {
    this.databaseService.getData().subscribe(data => {
      this.users = data;
    });
  }

  openModal(user: any) {
    const dialogRef = this.dialog.open(UserEditComponent, {
      data: user
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal fechado');
    });
  }

  openModalMap(user: any) {
    const dialogRef = this.dialog.open(ModalMapComponent, {
      data: user

    });

  }

  deleteUser(userIndex: any) {
    if ('id' in userIndex) {
      const userId = Number(userIndex.id);

      Swal.fire({
        title: 'Excluir usuário',
        text: "Deseja realmente excluir o usuário?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '##777',
        cancelButtonColor: '##777',
        confirmButtonText: 'Sim'
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deletado!',
            'Usuário deletado com sucesso.',
            'success'
          );
          if (userId) {
            try {
              await this.databaseService.deleteData(userId).toPromise();
              setTimeout(() => {
                window.location.reload();
              }, 2000);
            } catch (error) {
              this.toast.error('Erro ao excluir usuário:');
              console.error('Erro ao excluir usuário:', error);
            }
          } else {
            console.error('Propriedade "id" não encontrada no objeto.');
          }
        }
      });
    }
  }
}