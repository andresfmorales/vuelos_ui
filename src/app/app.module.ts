import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ListadoPasajerosComponent } from "./components/listado-pasajeros/listado-pasajeros.component";
import { MainComponent } from "./layout/main/main.component";
import { GestionarPasajerosComponent } from "./components/gestionar-pasajeros/gestionar-pasajeros.component";

import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { ModificarPasajerosComponent } from './components/gestionar-pasajeros/modificar-pasajeros/modificar-pasajeros.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    ListadoPasajerosComponent,
    MainComponent,
    GestionarPasajerosComponent,
    ModificarPasajerosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
