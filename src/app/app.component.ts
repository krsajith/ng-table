import { Component, OnInit } from '@angular/core';
import { TableDefinition, TableRowData } from './table-models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ng-table';
  data = [
    { "name": "Pamela Altenwerth", "email": "Leslie_Welch31@yahoo.com" },
    {
      "name": "Constance Windler", "email": "Shayne.Jacobson86@gmail.com",
      addressList: [
        { "city": "South Simchester", "buildingNumber": "72640", "streetName": "Bernier Loaf" },
        { "city": "Handboro", "buildingNumber": "477", "streetName": "Reid Fork" },
        { "city": "Rogahnville", "buildingNumber": "226", "streetName": "Schuppe Stream" },
        { "city": "Loweview", "buildingNumber": "1870", "streetName": "Bechtelar Freeway" },
      ]
    },
    { "name": "Kristen Mayer", "email": "Rolando_Waters21@yahoo.com" },
    { "name": "Richard Kunde", "email": "Lizzie.Witting@gmail.com" },
    {
      "name": "Jenny Lemke", "email": "Tevin.Cartwright@yahoo.com",

      addressList: [{ "city": "South Whittier", "buildingNumber": "6161", "streetName": "Rolfson Glens" },
      { "city": "Orland Park", "buildingNumber": "4304", "streetName": "Macejkovic Cove" },
      { "city": "Bartonborough", "buildingNumber": "07834", "streetName": "Lori Spur" }]
    },
    { "name": "Chris Cormier", "email": "Hayden_Haag@hotmail.com" },
    { "name": "Dr. Mack Hilll", "email": "Eli.Sporer@yahoo.com" },
    { "name": "Kara Purdy", "email": "Everette47@gmail.com" },
    { "name": "Abraham Cronin", "email": "Brent_Schultz@yahoo.com" },
    { "name": "Miss Stanley Ward", "email": "Caitlyn.Dare@yahoo.com" }
  ]

  tableDefinition: Partial<TableDefinition> = {
    className: "table",
    component: "table",
    tableRow:{
      columns: ['name', 'email'],
      className:"person-row",
      type:"table-row"
    },    
    children: [
      {
        name: "Address List",
        field: "addressList",
        component: "table-row",
        tableRow:{
          columns: ['city', 'buildingNumber', 'streetName'],
          className:"address-row",
          type:"table"
        }
        
      }
    ],
  }

  tableRowData: Partial<TableRowData>[] = []

  ngOnInit(): void {
    this.showTableRows(this.tableDefinition, this.data);
  }
  showTableRows(td: Partial<TableDefinition>, data: any[]) {
    // for (const row of data) {
    //   this.tableRowData.push({
    //     className: td.className,
    //     data: row,
    //     cols: td.columns
    //   })
    // }

    // console.log(this.tableRowData);
    
  }
}



