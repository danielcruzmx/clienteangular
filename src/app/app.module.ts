import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';
import { HeaderComponent } from './reportemovimientos/header.component';
import { OpcionComponent } from './opcion/opcion.component';
import { OpcionesService } from 'app/servicios/opciones.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewmodeloComponent,
    HeaderComponent,
    OpcionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [OpcionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
