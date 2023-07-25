import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicContent } from '../dynamic-content';
import { DynamicContentServiceService } from '../dynamic-content-service.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-dynamic-content-view',
  templateUrl: './dynamic-content-view.component.html',
  styleUrls: ['./dynamic-content-view.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DynamicContentViewComponent {
  
  @Input()
  type!: string | undefined;

  @Input()
  data!:unknown;

  @Input()
  config!:unknown;

  @Output()
  clicked:EventEmitter<void> = new EventEmitter()
  
  constructor(private dynamicContentServiceService:DynamicContentServiceService,private cd:ChangeDetectorRef){

  }


  @ViewChild("container", { read: ViewContainerRef }) set setContailner(viewContainerRef: ViewContainerRef) {

    let component = this.dynamicContentServiceService.getTypeFromString(this.type || '');
    console.log(component);
    

    // viewContainerRef.clear();
    // if(component){
    //   const componentRef = viewContainerRef.createComponent<DynamicContent | BaseComponent>(component);
    //   componentRef.instance.config=this.config;
    //   componentRef.instance.data=this.data;
    //   componentRef.instance.clicked=this.clicked;
    //   this.cd.detectChanges();
    // }
  }

}
