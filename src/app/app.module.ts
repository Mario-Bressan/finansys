import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDatabase} from './in-memory-database';
import { HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // ativação do in memory web api
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase),
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
