import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
// import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'cm-zipad',
  templateUrl: './zipad.component.html',
  styleUrls: ['./zipad.component.scss']
})
export class ZipadComponent implements OnInit {
  // results: string[];
  // uri:string="https://zipcloud.ibsnet.co.jp/api/search";
  
  constructor(public cmsrv: CommonService
              // private http: HttpClient
              ) { }

  ngOnInit(): void {
  
  }

  // get_adr(zip:string):void {
  //   let httpOptions = {
  //     headers: new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded'),
  //     params: new HttpParams().set('zipcode', zip)
  //   };
  //   console.log(zip);
  //   this.http.get(this.uri,httpOptions).subscribe(data => {
  //     // Read the result field from the JSON response.
  //     this.results = data['results'];
  //     console.log(data,this.results);
  //   })
  // }
}
