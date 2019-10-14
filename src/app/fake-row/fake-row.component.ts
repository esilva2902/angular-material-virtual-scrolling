import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fake-row',
  templateUrl: './fake-row.component.html',
  styleUrls: ['./fake-row.component.scss']
})
export class FakeRowComponent implements OnInit {

  @Input('row-number') rowNumber: number;
  @Input('entry') entry: any;

  constructor() { }

  ngOnInit() {
  }

}
