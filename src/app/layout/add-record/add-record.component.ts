import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  ngOnInit(): void {
  }
//   constructor() {
//            this.jogDate = this.jogDate;
//            this.distance = this.distance;
//            this.time = this.time;
//   }

  jogDate = '0000-00-00';
  distance = 0;
  time = '00:00';

  handleButtonClick(jogDate, distance, time){
   console.log(jogDate, distance, time);
  }

}
