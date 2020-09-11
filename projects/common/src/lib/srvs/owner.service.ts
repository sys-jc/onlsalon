import { Injectable } from '@angular/core';
import { CommonService,Zipad } from '../common.service';

export class Owner {
  dojoid:number;
  googleid:number;
  dojoname:string;
  sei:string;
  mei:string;
  birth:Date;
  mail:string;
  zipad:Zipad;
  url:string;
  tel:string;
  folderid:string;
  constructor(init?:Partial<Owner>) {
      Object.assign(this, init);
  }
}

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  public owner:Owner = new Owner();
  constructor(public cmsrv:CommonService) {
    this.owner.zipad=this.cmsrv.zipad;
  }
}
