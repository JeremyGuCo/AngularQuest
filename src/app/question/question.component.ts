import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Question } from '../model/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() public questions: Question[];
  @Input() public question: string;
  @Input() public id: string;
  public checked: boolean;

  @Output() public getAnswer:  EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  

  sendAnswer(id: string, value: boolean): void {
    this.getAnswer.emit(`${id}-${value}`); 
    this.checked = true;
}


}



