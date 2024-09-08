import { Injectable } from '@angular/core';
import { producto } from '../types/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiProductoService {
private url = 'https://66d8a22b37b1cadd80554767.mockapi.io/productos/';
  constructor( private http: HttpClient) {}
  getAll(): Observable<producto[]> {
    return this.http.get<producto[]>(this.url);
  }
  getOne(id: string): Observable<producto> {
  return this.http.get<producto>(this.url + id);
  }
}
