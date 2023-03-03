import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Input } from '@angular/core';
import { DynamicContent } from '../dynamic-content';
import { DynamicContentServiceService } from '../dynamic-content-service.service';
import { TableDefinition, TableEntry } from '../table-models';
import { nanoid } from 'nanoid'
import { animate, group, query, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations:[
    // the fade-in/fade-out animation.
    trigger('heightAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({maxHeight: "{{height}}rem"}), { params: { height: 100 } }),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({maxHeight: 0}),
        animate(200)
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(400, style({maxHeight: 0})))
    ])
  ]
})
@DynamicContentServiceService.register("table")
export class TableComponent implements DynamicContent {

  clicked!: EventEmitter<void>;

  @Input()
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

