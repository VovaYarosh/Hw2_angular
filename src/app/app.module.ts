import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { AuthComponent } from './components/auth/auth.component';
import { UserPortalComponent } from './components/user-portal/user-portal.component';
import { HousesComponent } from './components/houses/houses.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CreateHouseComponent } from './components/houses/create-house/create-house.component';
import { HouseSearchComponent } from './components/house-search/house-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    UserPortalComponent,
    HousesComponent,
    LoginComponent,
    RegisterComponent,
    CreateHouseComponent,
    HouseSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
