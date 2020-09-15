import { Component } from '@angular/core';
// import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';

@Component({
  selector: 'us-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    // private oauthService: OAuthService
    ) {
    // this.configureWithNewConfigApi();
  }

  private async configureWithNewConfigApi() {
    // this.oauthService.configure(authConfig);
    // // console.log(this.oauthService);
    // // awaitとしないとユーザーの情報が取得できない。
    // await this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }  
}
