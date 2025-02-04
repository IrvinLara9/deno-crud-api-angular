import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8000/api/fruits';

export interface Fruit {
  _id?: string;
  name: string;
  color: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  constructor(private http: HttpClient) {}

  getFruits(): Observable<Fruit[]> {
    return this.http.get<Fruit[]>(API_URL);
  }

  getFruit(id: string): Observable<Fruit> {
    return this.http.get<Fruit>(`${API_URL}/${id}`);
  }

  addFruit(fruit: Fruit): Observable<Fruit> {
    return this.http.post<Fruit>(API_URL, fruit);
  }

  updateFruit(id: string, fruit: Fruit): Observable<Fruit> {
    return this.http.put<Fruit>(`${API_URL}/${id}`, fruit);
  }

  deleteFruit(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${API_URL}/${id}`);
  }
}
