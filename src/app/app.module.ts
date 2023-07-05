import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GitusersComponent } from './components/pages/gitusers/gitusers.component';
import { SearchusersComponent } from './components/pages/searchusers/searchusers.component';
import { SearchUsersFormComponent } from './components/search-users-form/search-users-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, NgFor } from '@angular/common';
import { UserEditComponent } from './components/pages/user-edit/user-edit.component';
import { AngularDelegate } from '@ionic/angular';
import { ButtonComponent } from './components/button/button.component';
import { ToastService } from 'angular-toastify';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalMapComponent } from './components/modal-map/modal-map.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GitusersComponent,
    SearchusersComponent,
    SearchUsersFormComponent,
    UserEditComponent,
    ButtonComponent,
    ModalMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    NgFor,
    MatDialogModule,

  ],
  providers: [AngularDelegate, ToastService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
