import { Component } from '@angular/core';
import { DynamicContentServiceService } from '../dynamic-content-service.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@DynamicContentServiceService.register("home")
export class HomeComponent  extends BaseComponent{

}
