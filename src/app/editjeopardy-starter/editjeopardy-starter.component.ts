import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editjeopardy-starter',
  templateUrl: './editjeopardy-starter.component.html',
  styleUrls: ['./editjeopardy-starter.component.css']
})
export class EditjeopardyStarterComponent implements OnInit {

  answer;
  totalScore = 0;
 
  @Input() questionInfo;      
  @Output() answered = new EventEmitter(); 


  constructor() { }

  ngOnInit() {
  }


  submitAnswer() {
    if (this.questionInfo.answer == this.answer) {
      this.totalScore = this.totalScore + this.questionInfo.value

    }
    
    console.log(this.answer)
    this.answered.emit()
    this.answer = "";
  }


}
