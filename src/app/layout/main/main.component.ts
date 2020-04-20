import { Component, OnInit } from "@angular/core";
import { VueloService } from "src/app/services/vuelo.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
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

  ngOnInit(): void {}
}
