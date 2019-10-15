import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { FakeRowComponent } from './fake-row/fake-row.component';
import { FakeCompoundRowComponent } from './fake-compound-row/fake-compound-row.component';

@NgModule({
  declarations: [
    AppComponent,
    FakeRowComponent,
    FakeCompoundRowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    ScrollingModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
