import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap  } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { Apollo } from 'apollo-angular';
import * as Query from './queries';
import { UserService } from 'common';




@Component({
  selector: 'us-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public djid:string;
  public dojo:string;
  public form:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.djid = params.get('dojo');
      // console.log(this.djid);
      if (this.djid === null){
        this.djid = localStorage.getItem('olsalon_dojo');
      }else{
        // this.get_tbldj(this.djid);
        localStorage.setItem('olsalon_dojo', this.djid);
      }
      this.form = params.get('form');
      if (this.form === null){
        this.form = localStorage.getItem('olsalon_form');
      }else{
        localStorage.setItem('olsalon_form', this.form);
      }      
    });
  }
  public login() {

  }

}
