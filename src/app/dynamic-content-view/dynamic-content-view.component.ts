import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicContent } from '../dynamic-content';
import { DynamicContentServiceService } from '../dynamic-content-service.service';

@Component({
  selector: 'app-dynamic-content-view',
  templateUrl: './dynamic-content-view.component.html',
  styleUrls: ['./dynamic-content-view.component.css']
})
export class DynamicContentViewComponent {
  
  @Input()
  type!: string;
  
  constructor(private dynamicContentServiceService:DynamicContentServiceService){

  }


  @ViewChild("container", { read: ViewContainerRef }) set setContailner(viewContainerRef: ViewContainerRef) {

    let component = this.dynamicContentServiceService.getTypeFromString(this.type);

    viewContainerRef.clear();
    if(component){
      const componentRef = viewContainerRef.createComponent<DynamicContent>(component);
      componentRef.instance.data=this.type;
    }
  }

}
