import { Component } from '@angular/core';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { FakeDbService } from './services/http-services/fake-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-virtual-scrolling';
  
  fakeDbData$: Observable<any>;

  constructor(
    private scrollDispatcher: ScrollDispatcher,
    private fakeDbService: FakeDbService) { }

  ngOnInit() {
    this.scrollDispatcher.scrolled().subscribe((value: CdkScrollable) => {
      console.log(`ScrollDispatcher.scrolled ==> `, value);
    });

    this.fakeDbData$ = this.fakeDbService.getEmployees(1, 100000).pipe(
      map((entries: any[]) => {
        console.log(`Total entries: ${entries.length}`);
  
        return entries;        
      })
    );
  }
}
