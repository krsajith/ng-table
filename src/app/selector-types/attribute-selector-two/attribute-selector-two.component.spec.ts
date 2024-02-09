import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeSelectorTwoComponent } from './attribute-selector-two.component';

describe('AttributeSelectorTwoComponent', () => {
  let component: AttributeSelectorTwoComponent;
  let fixture: ComponentFixture<AttributeSelectorTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AttributeSelectorTwoComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(AttributeSelectorTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
