import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseApi } from '../utils/types/apiResponse';

@Injectable({ providedIn: 'root' })
export class ApiService<T> {
  constructor(private httpClient: HttpClient) {}

  private apiUrl = 'http://localhost:3000/'; // todo criar environment

  get(): Observable<T> {
    return this.httpClient.get<T>(this.apiUrl);
  }
  post(body: Partial<T>): Observable<ResponseApi<T>> {
    return this.httpClient.post<ResponseApi<T>>(this.apiUrl, body);
  }
  put(body: Partial<T>): Observable<ResponseApi<T>> {
    return this.httpClient.put<ResponseApi<T>>(this.apiUrl, body);
  }
  patch(body: Partial<T>): Observable<ResponseApi<T>> {
    return this.httpClient.patch<ResponseApi<T>>(this.apiUrl, body);
  }
  delete(param: string): Observable<ResponseApi<T>> {
    return this.httpClient.delete<ResponseApi<T>>(this.apiUrl, { params: { id: param } });
  }
}
