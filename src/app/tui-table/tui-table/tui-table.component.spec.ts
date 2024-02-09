import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuiTableComponent } from './tui-table.component';

describe('TuiTableComponent', () => {
  let component: TuiTableComponent;
  let fixture: ComponentFixture<TuiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [TuiTableComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(TuiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
