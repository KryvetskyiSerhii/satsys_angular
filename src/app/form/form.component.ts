import { Component, OnInit } from '@angular/core';
import { BackService } from '../back.service';

interface SatData {
  key: string;
  val: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  data: any;
  inputValue: string = '';

  constructor(private backService: BackService) {}

  handleInput(e: any) {
    this.inputValue = e.target.value;
    console.log(this.inputValue);
  }

  handleClick() {
    this.backService.getData(this.inputValue).subscribe((response) => {
      this.data = response;
      console.log(this.data.dict);
    });
  }

  ngOnInit(): void {}
}
