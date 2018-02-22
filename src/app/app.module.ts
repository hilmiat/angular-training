import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TabelComponent } from './tabel/tabel.component';
import { DatasiswaComponent } from './datasiswa/datasiswa.component';


@NgModule({
  declarations: [
    AppComponent,
    TabelComponent,
    DatasiswaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
