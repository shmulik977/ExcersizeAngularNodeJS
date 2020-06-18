import { Component, OnInit } from '@angular/core';
import {ArrayService} from './array.service';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss']
})
export class ArrayComponent implements OnInit {

array: number[];
numberToAdd: number;
errorMessage: string;

  constructor(private arrayService: ArrayService) { }

  ngOnInit(): void {
  }

  getArray(): void {
    this.arrayService.getArray().subscribe(array => {
      this.array = array;
    });
  }

  sortArray(): void {
    this.arrayService.sortArray().subscribe(array => {
      this.array = array;
    });
  }

  create(): void {
    this.arrayService.addNumber(this.numberToAdd).subscribe(
      _ => {
        this.getArray();
      },
      x => this.errorMessage = JSON.stringify(x.error)
    );
  }
}
