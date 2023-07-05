import { lastValueFrom} from 'rxjs';
import { DatabaseService } from './../../services/database.service';
import { Component } from '@angular/core';
import { GithubUserService } from 'src/app/services/github-user-service.service';
import Swal from 'sweetalert2';
interface UserData {
  email: string;
  login: string;
  name: string;
  location: Boolean;
}
@Component({
  selector: 'app-search-users-form',
  templateUrl: './search-users-form.component.html',
  styleUrls: ['./search-users-form.component.sass']
})
export class SearchUsersFormComponent {
  user: any;
  users: any
  searchUserName: string = ''
  http: any;
  apiUrl: any;

  constructor(
    private githubUserService: GithubUserService,
    private databaseService: DatabaseService,
  ) { }

  async searchUser(username: string) {
    const source = this.githubUserService.getUser(username)
    const data = await lastValueFrom(source)
    this.user = data as UserData;
  }

  async pushData(username: string) {
    const data = username;
    console.log(data)

    try {
      const response = await lastValueFrom(this.databaseService.postData(data));
      let timerInterval: ReturnType<typeof setInterval>;
      Swal.fire({
        title: 'Usuário adicionado com sucesso!',
        html: 'A janela fechará em <b></b> milisegundos.',
        timer: 2000,
        timerProgressBar: true,
        customClass: {
          title: 'green-title'
        },
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer()?.querySelector('b');
          if (b) {
            let timerLeft: number | undefined = Swal.getTimerLeft();
            b.textContent = timerLeft?.toString() || '0';

            const countdownInterval = setInterval(() => {
              timerLeft = Swal.getTimerLeft();
              b.textContent = timerLeft?.toString() || '0';

              if (timerLeft !== undefined && timerLeft <= 0) {
                clearInterval(countdownInterval);
                Swal.close();
              }
            }, 100);
          }
        }
      }).then(() => {
        window.location.href = '/';
      });


    } catch (error: any) {
      if (error?.error && error.status === 409) {
        Swal.fire({
          title: 'Usuário já cadastrado!',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          customClass: {
            title: 'registered-user',
            confirmButton: 'custom-ok-button',
          }
        })
      } else {
        Swal.fire({
          title: 'Erro ao salvar usuário. Aguarde alguns instantes!',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          customClass: {
            title: 'unregistered-user',
            confirmButton: 'custom-ok-button',
          }
        })
        console.error('Serviço Indisponível!');
      }
    }

  }

}