import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DynamicContent } from '../dynamic-content';
import { DynamicContentServiceService } from '../dynamic-content-service.service';
import { TableRow } from '../table-models';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
@DynamicContentServiceService.register("table-row")
export class TableRowComponent implements DynamicContent {

  @Output()
  public click:EventEmitter<void> = new EventEmitter();

  @Input()
  data: any;

  tableRow!:TableRow;

  set config (config:unknown) {
    this.tableRow = config as TableRow;
  }

}
