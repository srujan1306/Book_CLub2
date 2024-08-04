import { Injectable } from '@angular/core';
import { Book } from './app.component';
import { Newbook } from './newbook.service';
const API = 'https://669a42909ba098ed61fef760.mockapi.io';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  getbooks(): Promise<any> {
    return fetch(`${API}/books`).then((res) => res.json());
  }
  addbook(bookadd: Newbook) {
    // this.movieList.push(newMovie);

    // Post
    // 1. method
    // 2. body - Data & JSON
    // 3. Header - JSON

    return fetch(`${API}/books`, {
      method: 'POST',
      body: JSON.stringify(bookadd),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }
}
