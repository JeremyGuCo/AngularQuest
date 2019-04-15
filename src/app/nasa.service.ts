import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class NasaService {

  private service: HttpClient;

  constructor(param_service: HttpClient) {
    this.service = param_service;
  }

  public getImageOfTheDay(): Observable<String> {
    const obs1: Observable<any> = this.service.get('https://api.nasa.gov/planetary/apod?api_key=hwT7qvGnH6F25POytctgUc6CBQhHjrFhfg4Sngql');
    const treatment = (param_img: any) => {
      return param_img.url;
    };
    return obs1.pipe(map(treatment));
  }


}
