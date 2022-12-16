import { Component, EventEmitter } from '@angular/core';
import { DynamicContent } from '../dynamic-content';
import { DynamicContentServiceService } from '../dynamic-content-service.service';

@Component({
  selector: 'app-dynamic-content-two',
  templateUrl: './dynamic-content-two.component.html',
  styleUrls: ['./dynamic-content-two.component.css']
})
@DynamicContentServiceService.register("two")
export class DynamicContentTwoComponent implements DynamicContent{
  click!: EventEmitter<void>;
  config: unknown;
  data: unknown;

}
