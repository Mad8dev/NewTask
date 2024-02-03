import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private http: HttpClient) {}

  getProduct() {
    this.http.get('https://kep.uz/api/problems').subscribe((result) => {
      console.log(result);
    });
    return this.http.get('https://kep.uz/api/problems');
  }
}
