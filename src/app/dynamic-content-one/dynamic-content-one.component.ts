import { Component } from '@angular/core';
import { DynamicContent } from '../dynamic-content';
import { DynamicContentServiceService } from '../dynamic-content-service.service';

@Component({
  selector: 'app-dynamic-content-one',
  templateUrl: './dynamic-content-one.component.html',
  styleUrls: ['./dynamic-content-one.component.css']
})
@DynamicContentServiceService.register("one")
export class DynamicContentOneComponent implements DynamicContent {
  data: unknown;

}
