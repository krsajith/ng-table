import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileImportDialogComponent } from './file-import-dialog.component';

describe('FileImportDialogComponent', () => {
  let component: FileImportDialogComponent;
  let fixture: ComponentFixture<FileImportDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileImportDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileImportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
