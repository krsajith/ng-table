import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input } from '@angular/core';
import { DynamicContent } from '../dynamic-content';
import { DynamicContentServiceService } from '../dynamic-content-service.service';
import { TableDefinition, TableEntry} from '../table-models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
@DynamicContentServiceService.register("table")
export class TableComponent implements DynamicContent{
  
  clicked!: EventEmitter<void>;
    
  tableDefinition!: Partial<TableDefinition>;

  list!:Partial<TableEntry>[];

  constructor(private cd:ChangeDetectorRef){

  }

  set config (config:unknown) {
    this.tableDefinition = config as TableDefinition;
  }

  @Input()
  set data (data: unknown) {
    const list = data as []
    this.list = list.map(data=>{
      return {...this.tableDefinition.tableEntry,data:data}
    })
    this.cd.detectChanges();
  }

  expand(index:number,data:any,$event:any) {
    console.log($event);

    // data:any;
    // type:string
    // config:unknown;


    
    if(this.tableDefinition.children){
      const childTable = this.tableDefinition.children[0];
      if(childTable.field){
        const newEntry = {data:data[childTable.field], config:childTable,type:'table'}
        console.log(JSON.stringify(newEntry));
        this.list.splice(index+1, 0,newEntry);
        console.table(this.list);
        this.cd.detectChanges();
      }
    }
  }
}

// export interface TableDefinition {
//   name:      string;
//   field:     string;
//   component: string;
//   children: Partial<TableDefinition>[];
//   className:string;
//   tableEntry:Partial<TableEntry>;
// }
