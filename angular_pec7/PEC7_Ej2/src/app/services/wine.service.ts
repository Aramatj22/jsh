import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Wine } from "../models/wine";
import { UserStoreService } from './user-store.service';


@Injectable({
  providedIn: 'root'
})
export class WineService {

  constructor(private http: HttpClient) { }

  getWines(query?: string): Observable<Wine[]> {
    return this.http.get<Wine[]>(`http://localhost:3000/api/wine`, { params: { q: query } });
  }

  getWine(wineId: string): Observable<any> {

    return this.http.get<Wine>('/api/wine/:id'+ wineId);
    //return this.http.get<Wine>('http://localhost:3000/api/wine/:id ' + wineId);
  }

  changeQuantity(wineID: number, changeInQuantity: number): Observable<any> {
    return this.http.patch('http://localhost:3000/api/wine/' + wineID, {changeInQuantity: changeInQuantity});
  }

  create(wine: Wine): Observable<Wine> {
    return this.http.post<Wine>('http://localhost:3000/api/wine', wine);
  }

  
}
