import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { GestionarPasajerosComponent } from "./components/gestionar-pasajeros/gestionar-pasajeros.component";
import { ListadoPasajerosComponent } from "./components/listado-pasajeros/listado-pasajeros.component";
import { MainComponent } from "./layout/main/main.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  {
    path: "main",
    component: MainComponent
  },
  {
    path: "listado-pasajeros/:id",
    component: ListadoPasajerosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
