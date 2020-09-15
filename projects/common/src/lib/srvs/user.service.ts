import { Injectable } from '@angular/core';
import { CommonService,Zipad } from '../common.service';

export class User {
  userid:number;
  googlid:string;
  dojoid:number;
  mail:string;
  sei:string;
  mei:string;
  birth:Date;
  class:string;
  eda:number;
  zipad:Zipad;
  tel:string;
  id:number;
  constructor(init?:Partial<User>) {
      Object.assign(this, init);
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user:User = new User();
  constructor(public cmsrv:CommonService) {
    this.user.zipad=this.cmsrv.zipad;
  }
}
