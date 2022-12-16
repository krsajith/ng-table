export interface TableDefinition {
    name:      string;
    field:     string;
    component: string;
    children: Partial<TableDefinition>[];
    className:string;
    tableEntry:Partial<TableEntry>;
}

export interface TableRow {
    className:string;
    columns:string[];
}
export interface TableEntry {
    data:any;
    type:string
    config:unknown;
}

