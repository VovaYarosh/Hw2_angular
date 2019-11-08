import {Component, OnInit} from '@angular/core';
import {HousesComponent} from "./components/houses/houses.component";

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
  result: any = '';

  constructor(
    private houses: HousesComponent
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

  houseSearch(resOfSearch) {
    this.resOfSearch(resOfSearch);
  }

  resOfSearch(val){
    [this.result] =  this.houses.houses.filter(house => house.city = val)
  }



}


