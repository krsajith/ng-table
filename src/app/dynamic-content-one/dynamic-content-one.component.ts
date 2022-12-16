import { Component, EventEmitter } from '@angular/core';
import { DynamicContent } from '../dynamic-content';
import { DynamicContentServiceService } from '../dynamic-content-service.service';

@Component({
  selector: 'app-dynamic-content-one',
  templateUrl: './dynamic-content-one.component.html',
  styleUrls: ['./dynamic-content-one.component.css']
})
@DynamicContentServiceService.register("one")
export class DynamicContentOneComponent implements DynamicContent {
  click!: EventEmitter<void>;
  config: unknown;
  _data: unknown;
  

  set data (data:unknown){
    this._data=data;
    console.log(this.data);
    
  }

  get list () {
    return this._data as []
  }

}
