import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input } from '@angular/core';
import { DynamicContent } from '../dynamic-content';
import { DynamicContentServiceService } from '../dynamic-content-service.service';
import { TableDefinition, TableEntry } from '../table-models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
      return { ...this.tableDefinition.tableEntry, data: data }
    })
    this.cd.detectChanges();
  }

  expand(index: number, tableEntry: Partial<TableEntry>, $event: any) {
    if (tableEntry.expanded) {
      this.list.splice(index + 1, 1);
      tableEntry.expanded=!tableEntry.expanded;
    } else if (this.tableDefinition.children) {
      const childTable = this.tableDefinition.children[0];
      if (childTable.field) {
        const newEntry = { data: tableEntry.data[childTable.field], config: childTable, type: 'table' }
        this.list.splice(index + 1, 0, newEntry);
      }
      tableEntry.expanded=true;
    }
    this.cd.detectChanges();
  }
}

