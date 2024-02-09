import { Component } from '@angular/core';
import { AttributeSelectorComponent } from '../attribute-selector/attribute-selector.component';

@Component({
    selector: 'app-wrapper',
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.css'],
    standalone: true,
    imports: [AttributeSelectorComponent]
})
export class WrapperComponent {

}
