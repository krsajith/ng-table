import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row-derective.component.html',
  styleUrls: ['./table-row-derective.component.css']
})
export class TableRowDerectiveComponent implements OnInit {

  @Input() character: any;
  @Input() columns!: string[];

  constructor() { }

  ngOnInit() {
  }

}
