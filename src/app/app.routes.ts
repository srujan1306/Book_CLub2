import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MybooksComponent } from './mybooks/mybooks.component';
import { AddbookComponent } from './addbook/addbook.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'mybooks',
    component: MybooksComponent,
  },
  {
    path: 'addbook',
    component: AddbookComponent,
  },
];
