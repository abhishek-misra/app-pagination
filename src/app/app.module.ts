import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PaginationModule } from './app-pagination/app-pagination.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    PaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
