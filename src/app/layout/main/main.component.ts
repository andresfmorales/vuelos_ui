import { Component, OnInit } from "@angular/core";
import { VueloService } from "src/app/services/vuelo.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  title = "Taller Vuelos";
  arregloVuelos: any[];

  constructor(private VueloService: VueloService, private router: Router) {
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

  public navegacion(path): void {
    this.router.navigate([path]);
  }

  public navegacionListPasajeros(path, id): void {
    this.router.navigate([path + "/" + id]);
  }

  ngOnInit(): void {}
}
