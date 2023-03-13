import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: '[tui-table]',
  templateUrl: './tui-table.component.html',
  styleUrls: ['./tui-table.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class TuiTableComponent implements OnInit {

  @Input() data:any[] | undefined;
  @Input()cols: any[] | undefined;

  ngOnInit(): void {
    
  }

}
