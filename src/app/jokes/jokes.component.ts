import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JokeService } from '../service/http.service';
import { Joke } from './joke.interface';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css'],
})
export class JokesComponent implements OnInit {
  jokes: Joke[] = [];
  categories: string[] = [];
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
    this.jokeService.getJokes().subscribe((joke: Joke) => {
      this.jokes.push(joke);
      console.log(joke);
    });
  }

  getCategories() {
    this.jokeService.getCategories().subscribe((categories: string[]) => {
      this.categories = categories;
    });
  }

  categoryExist(category: string) {
    this.jokeService.categoryExists(category).subscribe((joke: Joke) => {
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
