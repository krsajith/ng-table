import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleTestParentComponent } from './style-test-parent.component';

describe('StyleTestParentComponent', () => {
  let component: StyleTestParentComponent;
  let fixture: ComponentFixture<StyleTestParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [StyleTestParentComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(StyleTestParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
