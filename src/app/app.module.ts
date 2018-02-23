import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { TabelComponent } from './tabel/tabel.component';
import { DatasiswaComponent } from './datasiswa/datasiswa.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

import {
  MatButtonModule,
  MatToolbarModule,MatTableModule
} from '@angular/material';
import { RumahSakitService } from './service/rumah-sakit.service'
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes = [
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'', redirectTo:'home',pathMatch:'full'},
  // {path:'product/:id/:cat', component:ProductComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    TabelComponent,
    DatasiswaComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatToolbarModule,MatTableModule,
    HttpClientModule
  ],
  providers: [RumahSakitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
