import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  model: Order = new Order();

  constructor() { }

  onSubmit() {
  }

  ngOnInit() {
  }

}

export class Order {
  title: string;
  quantity: number;
  date: Date;
  contact: string;
}
