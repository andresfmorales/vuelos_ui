import { Component } from "@angular/core";
import { VueloService } from "./services/vuelo.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Taller Vuelos";
  arregloVuelos: any[];

  constructor(private VueloService: VueloService) {
    this.arregloVuelos = [];
    this.getAllVuelos();
  }

  getAllVuelos() {
    this.VueloService.getAllVuelos().subscribe(tasks => {
      for (let i = 0; i < tasks.length; i++) {
        this.arregloVuelos.push(tasks[i]);
      }
    });
  }
}
