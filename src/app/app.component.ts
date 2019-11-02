import { Component } from '@angular/core';
import {IHouseModel, IUserModel} from "./models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'luntick';

  log: boolean = false;
  reg: boolean = false;
  shortInfo: boolean = true;
  fullInfo: boolean;
  shownHouses: boolean = false;
  CreatehouseForm: boolean;
  result: any;
  logUp:string;

  shownHouseId = -1;
  random: number = Math.round(Math.random()*2);

  users:IUserModel[] = [
    {
      nickname: 'Sad',
      email: 'sad@fm.ua',
      password:'1234',
      is_blocked: false
    }
  ];

  signIn = {
    nickname:'',
    password:''
  };

  newUser:IUserModel = {
    nickname:'',
    email: '',
    password: '',
    is_blocked: Boolean(this.random)
  };

  houses:IHouseModel[] = [{
    id:1,
    city: 'LVIV',
    street: 'prospect svobody',
    room_count: 3,
    price: 100000,
    owner:this.users[0]
  }];


  newHouse: IHouseModel = {
  id: 0,
  city: '',
  street: '',
  room_count: 0,
  price: 0,
  owner:this.users[Math.random()* this.users.length]
  };

  //search engine
  resOfSearch(val){
    [this.result] =  this.houses.filter(house => house.city = val)
  }


  //logination functions

  login() {
    this.log = !this.log;
    this.reg = false;
    this.shownHouses = false
  }

  logUser(){
    const foundUser =  this.users.find(user =>
      this.signIn.nickname === user.nickname &&
      this.signIn.password === user.password
    );
    foundUser ? this.logUp = 'Welcome' :  'User is not found'
  }

  //registration functions
  register() {
    this.reg = !this.reg;
    this.log = false;
    this.shownHouses = false
  }

  regUser(){
    this.users.push(this.newUser);
    console.log('registered')
  }

  //houses functions
  displayHouses() {
    this.shownHouses = !this.shownHouses;
    this.log = false;
    this.reg = false
  }

  showFullInfo(id: number) {
    this.shownHouseId = id;
    this.fullInfo = !this.fullInfo;
  }

  createNewHouse(){
    this.houses.push({...this.newHouse, id: this.houses.length+1});
    console.log('house has been created')
  }

  postNewHouse() {
    this.CreatehouseForm = !this.CreatehouseForm;
  }

}


