import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { DynamicContentViewComponent } from './dynamic-content-view/dynamic-content-view.component';
import { TableRowComponent } from './table-row/table-row.component';
import { TableComponent } from './table/table.component';
import { Mt940Component } from './mt940/mt940.component';
import { TotalBalanceComponent } from './total-balance/total-balance.component';
import { TableRowDerectiveComponent } from './table-row-derective/table-row-derective.component';
import { WrapperComponent } from './selector-types/wrapper/wrapper.component';
import { AttributeSelectorComponent } from './selector-types/attribute-selector/attribute-selector.component';
import { AttributeSelectorTwoComponent } from './selector-types/attribute-selector-two/attribute-selector-two.component';
import { StyleTestParentComponent } from './style-test/style-test-parent/style-test-parent.component';
import { StyleTestChildComponent } from './style-test/style-test-child/style-test-child.component';
import { StyleTestGrandChildComponent } from './style-test/style-test-grand-child/style-test-grand-child.component';
import { TuiTableComponent } from './tui-table/tui-table/tui-table.component';
import {DialogModule} from '@angular/cdk/dialog';
import { FileImportDialogComponent } from './file-import-dialog/file-import-dialog.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {OverlayModule} from '@angular/cdk/overlay';
import { SimpleInputControl } from './simple-input-control/simple-input-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DynamicContentViewComponent,
    TableRowComponent,
    TableComponent,
    Mt940Component,
    TotalBalanceComponent,
    TableRowDerectiveComponent,
    TableRowComponent,
    WrapperComponent,
    AttributeSelectorComponent,
    AttributeSelectorTwoComponent,
    StyleTestParentComponent,
    StyleTestChildComponent,
    StyleTestGrandChildComponent,
    TuiTableComponent,
    FileImportDialogComponent,
    HomeComponent,
    SimpleInputControl
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    AppRoutingModule,
    HttpClientModule,
    OverlayModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
