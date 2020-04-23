import { Component, OnInit } from "@angular/core";
import { VueloService } from "src/app/services/services";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-listado-pasajeros",
  templateUrl: "./listado-pasajeros.component.html",
  styleUrls: ["./listado-pasajeros.component.css"]
})
export class ListadoPasajerosComponent implements OnInit {
  arregloPasajeros: any[];
  id: any = "";

  constructor(
    private VueloService: VueloService,
    private router: Router,
    protected activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.arregloPasajeros = [];
    this.getAllPasajeros();
  }

  getAllPasajeros() {
    this.VueloService.getAllPasajeros(this.id).subscribe(tasks => {
      for (let i = 0; i < tasks.length; i++) {
        this.arregloPasajeros.push(tasks[i]);
      }
    });
  }
  public navegacion(path): void {
    this.router.navigate([path]);
  }

  ngOnInit(): void {}
}
