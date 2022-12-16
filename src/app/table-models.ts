export interface TableDefinition {
    name:      string;
    field:     string;
    component: string;
    children: Partial<TableDefinition>[];
    className:string;
    tableRow:TableRow;
}

export interface TableRow {
    className:string;
    columns:string[];
    
}
export interface TableRowData extends TableRow {
    data:any;
}

