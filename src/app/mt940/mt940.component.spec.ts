import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mt940Component } from './mt940.component';

describe('Mt940Component', () => {
  let component: Mt940Component;
  let fixture: ComponentFixture<Mt940Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [Mt940Component]
})
    .compileComponents();

    fixture = TestBed.createComponent(Mt940Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
