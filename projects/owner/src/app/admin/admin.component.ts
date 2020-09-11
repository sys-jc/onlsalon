import { Component, OnInit } from '@angular/core';
import { OwnerService,Owner } from 'common';

@Component({
  selector: 'ow-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private ownsrv: OwnerService) { }

  ngOnInit(): void {
    // console.log(this.ownsrv.owner);
  }

}
