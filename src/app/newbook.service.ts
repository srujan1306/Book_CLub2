import { Book } from './app.component';

export type Newbook = Omit<Book, 'id'>;
