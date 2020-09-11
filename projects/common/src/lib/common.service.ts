import { Injectable } from '@angular/core';

export class Zipad {
  zip:string;
  region:string;
  local:string;
  street:string;
  extend:string;
  constructor(init?:Partial<Zipad>) {
      Object.assign(this, init);
  }
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public zipad:Zipad = new Zipad();
  constructor() { }
}
