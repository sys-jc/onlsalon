import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user.component';

// import { OAuthModule } from 'angular-oauth2-oidc';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
// import { CommonModule } from './../../../common/src/lib/common.module';
// import { MaterialModule } from './../../../common/src/lib/material.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // OAuthModule.forRoot(),
    // CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule 
  ],
  providers: [ Apollo, HttpLink ],
  bootstrap: [AppComponent]
})
export class AppModule { }
