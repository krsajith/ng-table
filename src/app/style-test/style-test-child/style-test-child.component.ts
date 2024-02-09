import { Component } from '@angular/core';
import { StyleTestGrandChildComponent } from '../style-test-grand-child/style-test-grand-child.component';

@Component({
    selector: 'app-style-test-child',
    templateUrl: './style-test-child.component.html',
    styleUrls: ['./style-test-child.component.css'],
    standalone: true,
    imports: [StyleTestGrandChildComponent]
})
export class StyleTestChildComponent {

}
