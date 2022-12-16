import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { DynamicContentViewComponent } from './dynamic-content-view/dynamic-content-view.component';
import { TableRowComponent } from './table-row/table-row.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    DynamicContentViewComponent,
    TableRowComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
