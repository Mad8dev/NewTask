import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private http: HttpClient) {}

  // getProduct() {
  //   this.http.get('https://kep.uz/api/problems').subscribe((result) => {
  //     console.log(result);
  //   });
  //   return this.http.get('https://kep.uz/api/problems');
  // }

  getProduct(page: number, itemsPerPage: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('itemsPerPage', itemsPerPage.toString());

    return this.http.get<any>('https://kep.uz/api/problems', { params });
  }
}
