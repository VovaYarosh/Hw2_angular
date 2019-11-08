import { Component, OnInit } from '@angular/core';
import {IHouseModel} from "../../../models/index";
import {AppComponent} from "../../../app.component";
import {HousesComponent} from "../houses.component";

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']
})
export class CreateHouseComponent implements OnInit {

  users = this.appComp.users;

  constructor(
    private houses: HousesComponent,
    private appComp: AppComponent
  ) { }

  ngOnInit() {}

  newHouse: IHouseModel = {
    id: 0,
    city: '',
    street: '',
    room_count: 0,
    price: 0,
    owner: this.users[Math.random() * this.users.length]
  };

  createNewHouse(item) {
    let house = item.form.value;
    this.houses.houses.push(house);
  }

}
