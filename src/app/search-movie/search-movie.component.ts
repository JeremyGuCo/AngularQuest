import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormArray,
  FormControl,
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  min = 1900;
  max = 2018;

  types: any[] = [
    { name: 'Films', id: 'movieType' },
    { name: 'Séries', id: 'serieType' },
    { name: 'Épisodes', id: 'episodeType' }
  ];
  descs: any[] = [
    { name: 'Courte', id: 'shortDesc' },
    { name: 'Longue', id: 'longueDesc' }
  ];

  movieForm = this.fb.group({
    titleIdMovie: this.fb.group({
      title: [''],
      id: [''],
    },
    { validators: this.isRequiredValidator("title", "id") }
    ),
    release: ['', this.rangeDateValidator(this.min, this.max)],
    type: [this.types[1].id],
    desc: [''],
  });

  isRequiredValidator(field1, field2): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.get(field1).value !== '' && control.get(field2).value !== '') {
        return null;
      } else {
        return { isRequired: { actual: control.get(field1).value, expected: control.get(field2).value } };
      }
    };
  }

  rangeDateValidator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const year = control.value;
      if (min <= year && year <= max) {
        return null;
      } else {
        return { min: { value: { min, max } } };
      }
    };
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.movieForm.valueChanges.subscribe(value => {
      console.log('Valeurs modifiées', value);
    });
    this.movieForm.controls['desc'].patchValue(this.descs[0].id);
  }

  onSubmit() {
    console.log('movieForm submitted : ', this.movieForm.value);
  }
}
