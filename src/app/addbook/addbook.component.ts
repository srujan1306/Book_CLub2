import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOption } from '@angular/material/core';
import { MatFormField, MatError, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';
import { MatSelect } from '@angular/material/select';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Newbook } from '../newbook.service';

@Component({
  selector: 'app-addbook',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatButtonModule,
    ReactiveFormsModule,
    MatError,
    MatSelect,
    MatLabel,
    MatOption,
    MatRadioGroup,
    MatRadioButton,
  ],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.scss',
})
export class AddbookComponent {
  bookForm: FormGroup;

  constructor(
    public BookService: BookService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // this.recipeadd = this.RecipeServiceService.getrecipes();
    this.bookForm = this.fb.group({
      image: ['', [Validators.required, Validators.minLength(2)]],
      title: ['', [Validators.required, Validators.minLength(2)]],
      category: '',
      rating: [
        '',
        [Validators.required, Validators.min(2), Validators.max(10)],
      ],
      summary: ['', [Validators.required, Validators.minLength(2)]],
      ingredients: '',
      timeToComplete: '',
      procedure: '',
    });
  }
  addbook() {
    if (this.bookForm.value) {
      let bookadd: Newbook = this.bookForm.value;

      this.BookService.addbook(bookadd).then(() => {
        this.router.navigate(['mybooks']);
      });
    }
  }
  get title() {
    return this.bookForm.get('title');
  }
  get image() {
    return this.bookForm.get('image');
  }
  get Category() {
    return this.bookForm.get('Category');
  }
}
