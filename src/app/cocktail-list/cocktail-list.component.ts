import { Component, OnInit } from '@angular/core';
import { CocktailService, cocktails } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})

export class CocktailListComponent implements OnInit {

  public  cocktails:cocktails[]= [];
  private  service:CocktailService;

  constructor( param_service:CocktailService ){
      this.service  =  param_service;
  }

  public  ngOnInit():void{
      this.service.getCocktails().subscribe(
          (param_cocktails:any) => {
              this.cocktails  =  param_cocktails;
          }
      );
  }

}
