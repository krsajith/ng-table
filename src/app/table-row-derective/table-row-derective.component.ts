import { Component, Input, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: '[app-table-row]',
    templateUrl: './table-row-derective.component.html',
    styleUrls: ['./table-row-derective.component.css'],
    standalone: true,
    imports: [NgFor, NgIf]
})
export class TableRowDerectiveComponent implements OnInit {

  @Input() character: any;
  @Input() columns!: string[];

  constructor() { }

  ngOnInit() {
  }

}
