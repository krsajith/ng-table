import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicContent } from '../dynamic-content';
import { DynamicContentServiceService } from '../dynamic-content-service.service';

@Component({
  selector: 'app-dynamic-content-view',
  templateUrl: './dynamic-content-view.component.html',
  styleUrls: ['./dynamic-content-view.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DynamicContentViewComponent {
  
  @Input()
  type!: string;

  @Input()
  data!:unknown;

  @Input()
  config!:unknown;

  click!:EventEmitter<void>
  
  constructor(private dynamicContentServiceService:DynamicContentServiceService,private cd:ChangeDetectorRef){

  }


  @ViewChild("container", { read: ViewContainerRef }) set setContailner(viewContainerRef: ViewContainerRef) {

    let component = this.dynamicContentServiceService.getTypeFromString(this.type);

    viewContainerRef.clear();
    if(component){
      const componentRef = viewContainerRef.createComponent<DynamicContent>(component);
      componentRef.instance.data=this.data;
      componentRef.instance.config=this.config;
      this.click = componentRef.instance.click;
      this.cd.detectChanges();
    }
  }

}
