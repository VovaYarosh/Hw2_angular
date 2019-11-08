import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  shownHouseId = -1;
  fullInfo: boolean;
  random: number = Math.round(Math.random()*2);

  houses = [{
    id: 1,
    city: 'LVIV',
    street: 'prospect svobody',
    room_count: 3,
    price: 100000,
    owner: true
  }];

  constructor(
  ) { }

  ngOnInit() {}

  showFullInfo(id: number) {
    this.shownHouseId = id;
    this.fullInfo = !this.fullInfo;
  }
}
