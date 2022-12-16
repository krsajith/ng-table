import { ChangeDetectionStrategy, Component, EventEmitter, Input } from '@angular/core';
import { DynamicContent } from '../dynamic-content';
import { DynamicContentServiceService } from '../dynamic-content-service.service';
import { TableDefinition, TableRowData } from '../table-models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
@DynamicContentServiceService.register("table")
export class TableComponent implements DynamicContent{
  
  click!: EventEmitter<void>;
    
  tableDefinition!: Partial<TableDefinition>;

  @Input()
  data: unknown;

  set config (config:unknown) {
    this.tableDefinition = config as TableDefinition;
  }

  get list () :Partial<TableRowData>[]{
    const list = this.data as []
    return list.map(data=>{
      return {...this.tableDefinition.tableRow,data:data}
    })
  }

  expand(i:number,data:any) {
    console.log(data,this.tableDefinition.children??[0]);
  }
}
