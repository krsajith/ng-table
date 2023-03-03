import { Component, OnInit } from '@angular/core';
import data from "./data";
@Component({
  selector: 'tui-table',
  templateUrl: './tui-table.component.html',
  styleUrls: ['./tui-table.component.css']
})
export class TuiTableComponent implements OnInit {

  data = data;
  cols = ['tradeId', 'tradeDateTime', 'tradeTransactionType', 'isInternalTrade', 'company', 'counterparty', 'profitcenter', 'traderName', 'commodity', 'origin', 'brand', 'grade', 'capacity', 'quantityToleranceType'];

  ngOnInit(): void {
    console.log(this.cols.length);
    
     


  }

}
