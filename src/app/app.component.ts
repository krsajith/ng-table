import { Dialog } from '@angular/cdk/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FileImportDialogComponent } from './file-import-dialog/file-import-dialog.component';
import { TableDefinition } from './table-models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // overlayPositionStrategy = this.overlay
  // .position().flexibleConnectedTo()


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
    tableEntry: {
      type: "table-row",
      config: {
        columns: ['name', 'email'],
        className: "person-row",
      }
    },
    children: [
      {
        name: "Address List",
        className: "table",
        field: "addressList",
        tableEntry: {
          type: "table-row",
          config: {
            columns: ['city', 'buildingNumber', 'streetName'],
            className: "address-row",
          }
        }
      }
    ],
  }

  characters!: Observable<any[]>;
  columns!: string[];

  isOpen = false;

  constructor(public dialog: Dialog,private overlay: Overlay) {
  }

  ngOnInit() {
    this.columns = ['name','age','species','occupation'];
    this.characters = of([
      {
        name: 'Earl of Lemongrab',
        age: 'Unknown',
        species: 'Lemon Candy',
        occupation: 'Earl, Heir to the Candy Kingdom Throne'
      },
      {
        name: 'Bonnibel Bubblegum',
        age: '19',
        species: 'Gum Person',
        occupation: 'Returned Ruler of the Candy Kingdom'
      },
      {
        name: 'Phoebe',
        age: '16',
        species: 'Flame Person',
        occupation: 'Ruler of the Fire Kingdom'
      },
      {
        name: 'Lumpy Space Princess',
        age: '18',
        species: 'Lumpy Space Person',
        occupation: 'Babysitter'
      },
    ])
  }

  openDialog(): void {

    const positionStrategy = this.overlay
    .position()
    .global()
    .right()
    .centerVertically();

    this.dialog.open<string>(FileImportDialogComponent,{positionStrategy:positionStrategy,panelClass: 'full-height-dialog'});
  }
}



