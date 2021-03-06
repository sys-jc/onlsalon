import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistComponent } from './regist/regist.component';
import { AdminComponent } from './admin/admin.component';

import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from './../../../common/src/lib/common.module';
import { MaterialModule } from './../../../common/src/lib/material.module';
import { NavbarComponent } from './navbar/navbar.component';
// import { MaterialModule } from './material.module';
// import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatIconModule } from '@angular/material/icon';
// import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistComponent,
    AdminComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule
    // ,MatButtonModule
    // ,MatCardModule
    // ,MatDatepickerModule
    // ,MatFormFieldModule
    // ,MatIconModule
    // ,MatInputModule
    // MatNativeDateModule
  ],
  providers: [
    // {provide: MAT_DATE_LOCALE, useValue: 'ja-JP'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
