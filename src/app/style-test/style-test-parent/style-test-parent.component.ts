import { Component } from '@angular/core';
import { StyleTestChildComponent } from '../style-test-child/style-test-child.component';

@Component({
    selector: 'app-style-test-parent',
    templateUrl: './style-test-parent.component.html',
    styleUrls: ['./style-test-parent.component.css'],
    standalone: true,
    imports: [StyleTestChildComponent]
})
export class StyleTestParentComponent {

}
