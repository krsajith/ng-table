import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom, throwError } from 'rxjs';
import { nanoid } from 'nanoid'

interface SignedUrl{
  fileName: string;
  url:string
}
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }

  async upload(input: HTMLInputElement | null, bucket: string) {
    if (input !== null && input.files) {
      const file = input.files[0];
      const self = this;
      const formData = new FormData();
      const fileName = nanoid(10) + '.' + file.name.split('.').pop();
      formData.append('file', file, fileName);
      formData.append('name', fileName);
      const resp = await firstValueFrom(self.http.post(`${environment.apiEndpoint}/upload-file/${bucket}`, formData, {}));
      return Promise.resolve(resp);
    }
    return undefined;
  }
}
