import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BookComponent } from './book/book.component';
import { MybooksComponent } from './mybooks/mybooks.component';
export interface Book {
  id: number;
  Title: string;
  Author: string;
  Image: string;
  Category: string;
  PublicationDate: string;
  Status: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, BookComponent, MybooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
