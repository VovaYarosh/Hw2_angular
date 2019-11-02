import {IUserModel} from './user.model';

export interface IHouseModel {
  id:number;
  city: string;
  street: string;
  room_count: number;
  price: number
  owner:IUserModel;
}
