import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicContentOneComponent } from './dynamic-content-one/dynamic-content-one.component';
import { DynamicContentTwoComponent } from './dynamic-content-two/dynamic-content-two.component';
import { DynamicContentViewComponent } from './dynamic-content-view/dynamic-content-view.component';
import { TableRowComponent } from './table-row/table-row.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    DynamicContentOneComponent,
    DynamicContentTwoComponent,
    DynamicContentViewComponent,
    TableRowComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
