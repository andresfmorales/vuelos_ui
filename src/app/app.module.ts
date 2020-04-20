import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListadoPasajerosComponent } from './components/listado-pasajeros/listado-pasajeros.component';
import { GestionarPasajerosComponent } from './components/gestionar-pasajeros/gestionar-pasajeros.component';
import { MainComponent } from './layout/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoPasajerosComponent,
    GestionarPasajerosComponent,
    MainComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
