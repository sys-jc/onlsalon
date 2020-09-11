import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { NgxYubinBangoModule } from 'ngx-yubinbango';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ZipadComponent } from './zipad/zipad.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CommonComponent } from './common.component';

@NgModule({
  declarations: [CommonComponent, ZipadComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    NgxYubinBangoModule
  ],
  providers: [ Apollo, HttpLink ],
  exports: [
    CommonComponent,
    ZipadComponent
  ]
})

export class CommonModule { 
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const uri = 'https://olsaltbl.herokuapp.com/v1/graphql';

    const authHeader = new HttpHeaders()
    .set('X-Hasura-Access-Key', 'something_secret')
    .set('X-Hasura-admin-secret', 'something_secret')
    .set('Content-Type', 'application/json')
    ;

    const http = httpLink.create({ uri, headers: authHeader });

    apollo.create({
      link: http,
      cache: new InMemoryCache()
    });
  }
}
