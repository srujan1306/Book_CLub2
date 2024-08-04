import { Component } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { BookService } from '../book.service';
import { Router } from 'express';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mybooks',
  standalone: true,
  imports: [BookComponent, RouterOutlet],
  templateUrl: './mybooks.component.html',
  styleUrl: './mybooks.component.scss',
})
export class MybooksComponent {
  books: any;
  filteredBooks: any;

  constructor(public BookService: BookService) {}
  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.BookService.getbooks().then((data) => {
      this.books = data;
      this.filteredBooks = this.books;
      console.log(this.filteredBooks);
    });
  }
}
