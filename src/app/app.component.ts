import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatabaseService } from './database.service';

export interface IData {
  id: number;
  title: string;
  difficulty: number;
  solved: number;
  tags: any;
  rating: any;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  searchText = '';
  data: any;
  count: any;
  total: any;
  tags: any;
  pagesize: any;
  pagesCount: any;
  dataService: any;

  constructor(private http: HttpClient, private database: DatabaseService) {}

  ngOnInit(): void {
    // this.data = this.getAllProduct();
    this.data = this.fetchData(40, 45);
  }

  fetchData(page: number, itemsPerPage: number): void {
    this.database.getProduct(page, itemsPerPage).subscribe(
      (data: any) => {
        return data;
      },
      (error: any) => {
        // Handle error
      }
    );
  }

  filterD() {
    this.data = this.data.sort(function (a: any, b: any) {
      return b.id - a.id;
    });
  }

  filterA() {
    this.data = this.data.sort(function (a: any, b: any) {
      return a.id - b.id;
    });
  }
  psize = 20;
  currentpage = 1;
}
