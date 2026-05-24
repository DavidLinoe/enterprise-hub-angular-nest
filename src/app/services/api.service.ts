import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  get() {
    return this.httpClient.get('');
  }
  post() {
    return this.httpClient.post('');
  }
  put() {
    return this.httpClient.put('');
  }
  patch() {
    return this.httpClient.patch('');
  }
  delete() {
    return this.httpClient.delete('');
  }
}
