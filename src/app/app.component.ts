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

  constructor(private http: HttpClient, private database: DatabaseService) {}
  ngOnInit(): void {
    this.data = this.getAllProduct();
  }

  getAllProduct() {
    this.database.getProduct().subscribe({
      next: (res: any) => {
        this.data = res.data;
        this.total = res.total;
        this.pagesCount = res.pagesCount;
        console.log(this.pagesCount);
        this.count = console.log(this.data);
      },
    });
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
