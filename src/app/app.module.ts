import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GitusersComponent } from './components/pages/gitusers/gitusers.component';
import { SearchusersComponent } from './components/pages/searchusers/searchusers.component';
import { SearchUsersFormComponent } from './components/search-users-form/search-users-form.component';
import { FormsModule } from '@angular/forms';
import { FloatingDataComponent } from './components/floating-data/floating-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgFor } from '@angular/common';
import { UserEditComponent } from './components/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GitusersComponent,
    SearchusersComponent,
    SearchUsersFormComponent,
    FloatingDataComponent,
    UserEditComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgFor
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
