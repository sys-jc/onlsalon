import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cm-common',
  template: `
    <p>
      common works!
    </p>
  `,
  styles: []
})
export class CommonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
