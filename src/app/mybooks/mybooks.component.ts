import { Component } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { BookService } from '../book.service';
import { Router } from 'express';
import { RouterOutlet } from '@angular/router';
import { Book } from '../app.component';

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
  deleteBook(book_to_be_deleted: Book) {
    this.BookService.delete_the_book(book_to_be_deleted).then(() =>
      this.loadBooks()
    );
  }
}
