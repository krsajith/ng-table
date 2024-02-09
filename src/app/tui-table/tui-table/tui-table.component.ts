import { Component, OnInit } from '@angular/core';
import data from "./data";
import { NgFor, NgIf } from '@angular/common';
@Component({
    selector: 'tui-table',
    templateUrl: './tui-table.component.html',
    styleUrls: ['./tui-table.component.css'],
    standalone: true,
    imports: [NgFor, NgIf]
})
export class TuiTableComponent implements OnInit {

  data = data;
  cols = ['tradeId', 'tradeDateTime', 'tradeTransactionType', 'isInternalTrade', 'company', 'counterparty', 'profitcenter', 'traderName', 'commodity', 'origin', 'brand', 'grade', 'capacity', 'quantityToleranceType'];

  ngOnInit(): void {
    console.log(this.cols.length);
    
     


  }

}
