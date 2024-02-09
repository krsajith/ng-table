import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleTestChildComponent } from './style-test-child.component';

describe('StyleTestChildComponent', () => {
  let component: StyleTestChildComponent;
  let fixture: ComponentFixture<StyleTestChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [StyleTestChildComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(StyleTestChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
