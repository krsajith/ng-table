import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-file-import-dialog',
  templateUrl: './file-import-dialog.component.html',
  styleUrls: ['./file-import-dialog.component.css']
})
export class FileImportDialogComponent {
  file: File | undefined;
  constructor(public dialogRef: DialogRef,private fileUploadService:FileUploadService) { }
 async  handleFile(event: Event) {
    const input = event.target as HTMLInputElement;
    this.file = input.files ?  input.files[0] : undefined;
    console.log(this.file);
    
    const data = await this.fileUploadService.upload(input,'test');
    console.log(data);
  }

  formatBytes(bytes:number,decimals:number) {
    if(bytes == 0) return '0 Bytes';
    const k = 1024,
        dm = decimals || 2,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
 }
}

