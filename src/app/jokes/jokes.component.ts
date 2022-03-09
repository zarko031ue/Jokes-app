import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JokeService } from '../service/http.service';
import { JokeModel } from './joke.interface';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css'],
})
export class JokesComponent implements OnInit {
  jokes: JokeModel[] = [];
  categories: any[] = [];
  selectedCategory: string = '';

  constructor(private jokeService: JokeService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getCategories();
    this.getJoke();
  }

  form = this.fb.group({
    categories: [''],
  });

  onSelect() {
    this.selectedCategory = this.form.controls['categories'].value;
    this.categoryExist(this.selectedCategory);
  }
 
  getJoke(): void {
    this.jokeService.getJokes().subscribe((joke: any) => {
      this.jokes.push(joke);
    });
  }

  getCategories() {
    this.jokeService.getCategories().subscribe((categories: any) => {
      this.categories = categories;
    });
  }

  categoryExist(category: string) {
    this.jokeService.categoryExists(category).subscribe((joke: any) => {
      this.jokes = [];
      this.jokes.push(joke);
    });
  }

  onSubmit(form: FormGroup): void {
    console.log('f', form);
    console.log('val', form.value);
    console.log('f', form.getRawValue());
  }
}
