import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {IUserModel} from "../../../models";
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users:IUserModel[] = [
    {
      email: 'sad@fm.ua',
      password:'1234'
    }
  ];

  message: string = '';

  constructor(
    private appComponent: AppComponent
  ) {}

  ngOnInit() {
  }

  loginUser(login: NgForm) {
    const credentials = login.value;
    if (credentials && credentials.email && credentials.password) {
        for(let user of this.users) {
          if (user.password == credentials.password) {
            this.appComponent.isLogin = true;
          }
          this.message = this.appComponent.isLogin ? 'Welcome' : 'Email is invalid';
        }
    }
  }
}
