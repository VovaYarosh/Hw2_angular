import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLogin = false;
  isRegister = false;
  shownHouses = false;
  addHouse = false;
  users: [] = [];

  constructor(
  ) {}

  ngOnInit() {
  }

  showLogin() {
    this.isLogin = !this.isLogin;
    this.isRegister = false;
    this.shownHouses = false;
  }

  showRegister() {
    this.isRegister = !this.isRegister;
    this.isLogin = false;
    this.shownHouses = false;
  }

  displayHouses() {
    this.shownHouses = !this.shownHouses;
    this.isLogin = false;
    this.isRegister = false;
    this.addHouse = false;
  }

  showForm() {
    this.addHouse = true;
    this.isLogin = false;
    this.isRegister = false;
    this.shownHouses = false;
  }


  //search engine
  // resOfSearch(val){
  //   [this.result] =  this.houses.filter(house => house.city = val)
  // }
  //
  // regUser(){
  //   this.users.push(this.newUser);
  //   console.log('registered')
  // }
  //
  // postNewHouse() {
  //   this.CreatehouseForm = !this.CreatehouseForm;
  // }

}


