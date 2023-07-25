import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Injector, Input, Output, Type, ViewChild, ViewContainerRef, forwardRef } from '@angular/core';
import { DynamicContentServiceService } from '../dynamic-content-service.service';
import { BaseComponent } from '../base/base.component';
import { NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { BaseConrolComponent } from '../base-conrol/base-conrol.component';

@Component({
  selector: 'app-dynamic-content-view',
  templateUrl: './dynamic-content-view.component.html',
  styleUrls: ['./dynamic-content-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DynamicContentViewComponent),
      multi: true
    }
  ]
})
export class DynamicContentViewComponent  {


  @Input()
  type!: string | undefined;

  @Input()
  data!: unknown;

  @Input()
  config!: unknown;

  @Output()
  clicked: EventEmitter<void> = new EventEmitter()

  constructor(private injector: Injector,
    private dynamicContentServiceService: DynamicContentServiceService, private cd: ChangeDetectorRef) {
    
  }


  @ViewChild("container", { read: ViewContainerRef }) set setContailner(viewContainerRef: ViewContainerRef) {

    let component = this.dynamicContentServiceService.getTypeFromString(this.type || '') as Type<BaseConrolComponent>;
    console.log(component);


    viewContainerRef.clear();
    if (component) {
      const componentRef = viewContainerRef.createComponent<BaseConrolComponent>(component);
      componentRef.instance.init(
        {
          config: this.config,
          data: this.data,
          clicked: this.clicked
        }
      );

      this.setValueAccessor(componentRef.instance);



      // this.cd.detectChanges();
    }
  }

  setValueAccessor(instance: BaseComponent) {
    const ngControl = this.injector.get(NgControl);
    ngControl.valueAccessor = <BaseConrolComponent>instance;
  }

}
