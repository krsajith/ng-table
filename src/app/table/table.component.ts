import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Input } from '@angular/core';
import { DynamicContent } from '../dynamic-content';
import { DynamicContentServiceService } from '../dynamic-content-service.service';
import { TableDefinition, TableEntry } from '../table-models';
import { nanoid } from 'nanoid'
import { animate, group, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations:[
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({"max-height": '0px'}),
        animate('300ms ease', style( {"max-height": '72px'})),
      ]),
      transition(':leave', [
        animate('200ms ease', style( {"max-height": '0'})),
      ])
    ]),
  ]
})
@DynamicContentServiceService.register("table")
export class TableComponent implements DynamicContent {

  clicked!: EventEmitter<void>;

  tableDefinition!: Partial<TableDefinition>;

  list!: Partial<TableEntry>[];

  constructor(private cd: ChangeDetectorRef) {

  }


  set config(config: unknown) {
    this.tableDefinition = config as TableDefinition;
  }

  @Input()
  set data(data: unknown) {
    const list = data as []
    this.list = list.map(data => {
      return { ...this.tableDefinition.tableEntry, data: data,id:nanoid() }
    })
    this.cd.detectChanges();
  }

  expand(index: number, tableEntry: Partial<TableEntry>, $event: any) {
    if (tableEntry.expanded) {
      this.list.splice(index + 1, 1);
      tableEntry.expanded = !tableEntry.expanded;
    } else if (this.tableDefinition.children) {
      const childTable = this.tableDefinition.children[0];
      if (childTable.field) {
        const childData = tableEntry.data[childTable.field] as any[];
        if (!childData || childData.length === 0) {
          return;
        }
        const newEntry:Partial<TableEntry> = { data: childData, config: childTable, type: 'table',id:nanoid() }
        console.log(newEntry);
        
        this.list.splice(index + 1, 0, newEntry);
      }
      tableEntry.expanded = true;
    }
    this.cd.detectChanges();
  }

   trackById(index:number, entry:Partial<TableEntry>) {
    return entry.id;
  }
}

