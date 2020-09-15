import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap  } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { Apollo } from 'apollo-angular';
import * as Query from './queries';
import { User, UserService } from 'common';

@Component({
  selector: 'us-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  claims:any;
  public flgEx:boolean=false;
  public djid:number;
  public dojo:string;
  public form:string;
  constructor(private route: ActivatedRoute,
              private oauthService: OAuthService,
              private apollo: Apollo,
              public usrsrv: UserService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.djid = +params.get('dojo');
      // console.log(this.djid);
      if (this.djid === null){
        this.djid = +localStorage.getItem('olsalon_dojo');
        this.djid = 1;
      }else{
        // this.get_tbldj(this.djid);
        localStorage.setItem('olsalon_dojo', this.djid.toString());
      }
      this.form = params.get('form');
      if (this.form === null){
        this.form = localStorage.getItem('olsalon_form');
      }else{
        localStorage.setItem('olsalon_form', this.form);
      }      
    });
    this.oauthInit();
  }

 // 初期処理
 private async oauthInit() {
  this.oauthService.setStorage(localStorage);
  await this.oauthService.setupAutomaticSilentRefresh();
// この非同期処理を行わないとユーザー情報が取得できない
  await this.oauthService.loadDiscoveryDocument()
  .then(() => this.oauthService.tryLogin());
  this.claims = this.oauthService.getIdentityClaims();
  console.log("init",this.claims);
  this.apollo.watchQuery<any>({
    query: Query.GetQuery1,
    variables: { 
        gid:this.claims.sub,
        did:this.djid
      },
    })
    .valueChanges
    .subscribe(({ data }) => {
      if (data.tbluser.length==0){
        this.flgEx=false;
        this.usrsrv.user.googleid=this.claims.sub;
        this.usrsrv.user.sei=this.claims.family_name;
        this.usrsrv.user.mei=this.claims.given_name;
        this.usrsrv.user.mail=this.claims.email;
      } else { 
        this.flgEx=true;
        this.usrsrv.user = data.tbluser[0];
      }
    });
  }

  public login():void{
    this.oauthService.revokeTokenAndLogout();
    this.oauthService.initLoginFlow();
  }
  public goForm() {

  }
  public get_tbldj(dojoid:string):void {
    this.usrsrv.user= new User();
    this.apollo.watchQuery<any>({
      query: Query.GetQuery2,
      variables: { 
          did : dojoid
        },
      })
      .valueChanges
      .subscribe(({ data }) => {
        this.dojo = data.tbldojo_by_pk.dojoname;
        console.log(this.dojo);
      });
  }
  
  // public get_tblusr(loginfo):void {
  //   this.usrsrv.user=[];
    
  //   this.apollo.watchQuery<any>({
  //     query: Query.GetQuery1,
  //     variables: { 
  //         gid : loginfo.sub,
  //         did : this.djid
  //       },
  //     })
  //     .valueChanges
  //     .subscribe(({ data }) => {
  //       if (data.tblmember.length==0){
  //         this.flgEx=false;
  //         this.usrsrv.user.sei=loginfo.family_name;
  //         this.member.mei=loginfo.given_name;
  //         // console.log('getmemid前', this.djid);
  //         this.get_memid(this.djid);
  //         this.member.memeda=1;
  //         this.member.class="未登録";
  //         // this.member.birth="未登録";
  //         this.member.mail=loginfo.email;
  //       } else { 
  //         this.flgEx=true; 
  //         this.membs = data.tblmember;
  //         this.member = this.membs[0];
  //       }
  //     });
  // }
}
