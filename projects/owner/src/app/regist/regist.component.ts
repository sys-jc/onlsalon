import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Apollo } from 'apollo-angular';
import * as Query from '../queries';
import moment from 'moment';
import { OwnerService } from 'common';
declare let Email: any;
declare const gapi: any;

@Component({
  selector: 'ow-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.scss']
})
export class RegistComponent implements OnInit {
  public chOnline:boolean=true;
  public chMonfee:boolean=false;
  public chMember:boolean=false;

  constructor( private apollo: Apollo,
               private router: Router,
               public ownsrv: OwnerService ) { }

  ngOnInit(): void {
    // console.log(this.ownsrv);
    gapi.load('client', () => {
      gapi.client.init({
       apiKey: 'AIzaSyAn8eZ9hxycka9JElG_qwcxfg6-FS2JoQc',
       discoveryDocs: [
        'https://script.googleapis.com/$discovery/rest?version=v1',
      ], 
       clientId: '913080910103-0s805k1mjsgohs8begmklvrer1lu05ve.apps.googleusercontent.com',
       scope: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/forms https://www.googleapis.com/auth/spreadsheets'
     })

    });
  }

  public ins_owner():void { 
    var op = gapi.client.request({
      'root': 'https://script.googleapis.com',
      'path': 'v1/scripts/1d_MYVtwUgRlJv-rulQOPVNFHaSCYfzOSF5zVJUnfoGjoYA5stF5vRwrx:run',
      'method': 'POST',
      'body': {
                  'function': 'regist',
                  'parameters':[ this.ownsrv.owner.mail,
                                 this.ownsrv.owner.dojoname] 
              }
    });
    op.execute(function(resp) {
      if (resp.error && resp.error.status) {
        console.log(resp.error,resp.error.status);
      } else if (resp.error) {
        console.log(resp.error,resp.error.status);
      } else { 
        // this.ownsrv.owner.folderid = resp.response.result;
        console.log(resp.response.result);
      }
    });
     
    this.apollo.mutate<any>({
      mutation: Query.InsertOwner,
      variables: {
        "object": {
          "googleid": this.ownsrv.owner.googleid,
          "dojoname" : this.ownsrv.owner.dojoname,
          "sei" :   this.ownsrv.owner.sei,
          "mei" :   this.ownsrv.owner.mei,
          "birth" : moment(this.ownsrv.owner.birth).format("YYYY-MM-DD"),
          "mail" :  this.ownsrv.owner.mail,
          "zip" : this.ownsrv.owner.zipad.zip,
          "region" : this.ownsrv.owner.zipad.region,
          "local" : this.ownsrv.owner.zipad.local,
          "street" : this.ownsrv.owner.zipad.street,
          "extend" : this.ownsrv.owner.zipad.extend,
          "url" :   this.ownsrv.owner.url,
          "tel" :   this.ownsrv.owner.tel
       }
    },
  }).subscribe(({ data }) => {
    // console.log('InsertMember', data);
  },(error) => {
    console.log('error InsertMember', error);
  });

  Email.send({
    SecureToken : '9853fbc2-4291-42b0-a969-e2c2015d1527',
    From : 'info@online-salons.net',
    To : this.ownsrv.owner.mail,
    Body : 'テスト本文',
    Subject : 'テスト件名',
    // Host : 'smtp.kagoya.net',
    // Username : 'tkdtokyo.os-info',
    // Password : 'kL7gUEpakkT'
    }).then( 
      message => console.log(message)
     );

  this.router.navigate(['/admin']);
  }

}
