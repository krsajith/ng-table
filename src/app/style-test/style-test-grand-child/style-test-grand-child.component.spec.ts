import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleTestGrandChildComponent } from './style-test-grand-child.component';

describe('StyleTestGrandChildComponent', () => {
  let component: StyleTestGrandChildComponent;
  let fixture: ComponentFixture<StyleTestGrandChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleTestGrandChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleTestGrandChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
