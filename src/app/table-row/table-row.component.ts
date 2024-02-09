import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DynamicContent } from '../dynamic-content';
import { DynamicContentServiceService } from '../dynamic-content-service.service';
import { TableRow } from '../table-models';
import { NgClass, NgFor } from '@angular/common';

@Component({
    selector: 'app-table-row',
    templateUrl: './table-row.component.html',
    styleUrls: ['./table-row.component.css'],
    standalone: true,
    imports: [NgClass, NgFor]
})
@DynamicContentServiceService.register("table-row")
export class TableRowComponent implements DynamicContent {

  @Output()
  public clicked:EventEmitter<void> = new EventEmitter();

  @Input()
  data: any;

  tableRow!:TableRow;

  set config (config:unknown) {
    this.tableRow = config as TableRow;
  }

}
