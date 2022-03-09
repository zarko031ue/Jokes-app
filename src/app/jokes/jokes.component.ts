import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  jokes: any = [];
  categories: any = [];

  constructor(private service: HttpService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.displayCategories();
  }

  form = this.fb.group({
    selectOption: [ Validators.required],
  });

  displayJoke(): void {
    this.service.getJokes().subscribe((jokes: any) => {
      this.jokes = jokes;
    });
  }

  displayCategories() {
    this.service.getCategories().subscribe((categories: any) => {
      this.categories = categories;
    });
  }

  categoryExist() {
    this.service.categoryExists().subscribe((cat: any) => {
      console.log(cat);
    });
  }

  onSubmit(form: FormGroup): void {
    console.log('f', form);
    console.log('val', form.value);
    console.log('f', form.getRawValue());
  }
}
