import { Component, Optional, forwardRef } from '@angular/core';
import { BaseConrolComponent } from '../base-conrol/base-conrol.component';
import { ControlContainer, FormGroupDirective, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DynamicContentServiceService } from '../dynamic-content-service.service';

@Component({
  selector: 'app-simple-input-control',
  templateUrl: './simple-input-control.component.html',
  styleUrls: ['./simple-input-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SimpleInputControl),
      multi: true,
    },
  ],

})
@DynamicContentServiceService.register("simple")
export class SimpleInputControl extends BaseConrolComponent {
  value = '';
  override writeValue(value: any): void {
    // this.value = value;
  }
}
