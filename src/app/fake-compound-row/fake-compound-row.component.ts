import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fake-compound-row',
  templateUrl: './fake-compound-row.component.html',
  styleUrls: ['./fake-compound-row.component.scss']
})
export class FakeCompoundRowComponent implements OnInit {

  @Input('row-number') rowNumber: number;
  @Input('entry') entry: any;

  constructor() { }

  ngOnInit() {
  }

}
