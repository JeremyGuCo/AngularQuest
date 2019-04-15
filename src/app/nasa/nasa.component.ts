import { Component, OnInit } from '@angular/core';
import { NasaService } from '../nasa.service';


@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {

  public  imgOfTheDay = '';
  private  service:NasaService;

  constructor( param_service:NasaService ){
      this.service  =  param_service;
  }

  public  ngOnInit():void{
      this.service.getImageOfTheDay().subscribe(
          (param_img:string) => {
              this.imgOfTheDay  =  param_img;
          }
      );
  }

}
