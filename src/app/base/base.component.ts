import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base',
  template: `
    <p>
      base works!
    </p>
  `,
})
export class BaseComponent   {
  init(data?:any):void {
    console.log(data);
  }
}
