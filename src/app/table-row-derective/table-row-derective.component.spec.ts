import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowDerectiveComponent } from './table-row-derective.component';

describe('TableRowDerectiveComponent', () => {
  let component: TableRowDerectiveComponent;
  let fixture: ComponentFixture<TableRowDerectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [TableRowDerectiveComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(TableRowDerectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
