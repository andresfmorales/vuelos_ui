import { Component, OnInit } from "@angular/core";
import { VueloService } from "src/app/services/services";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-modificar-pasajeros",
  templateUrl: "./modificar-pasajeros.component.html",
  styleUrls: ["./modificar-pasajeros.component.css"]
})
export class ModificarPasajerosComponent implements OnInit {
  idPersona: any;
  Nombre: string;
  Direccion: string;
  Edad: any;
  Silla: any;
  idVuelo: any;

  constructor(
    private VueloService: VueloService,
    private router: Router,
    protected activatedRoute: ActivatedRoute
  ) {
    this.idPersona = this.activatedRoute.snapshot.paramMap.get("id");
    this.Nombre = this.activatedRoute.snapshot.paramMap.get("nombre");
    this.Direccion = this.activatedRoute.snapshot.paramMap.get("direccion");
    this.Edad = this.activatedRoute.snapshot.paramMap.get("edad");
    this.Silla = this.activatedRoute.snapshot.paramMap.get("numero_asiento");
    this.idVuelo = this.activatedRoute.snapshot.paramMap.get("vuelo_id");

    console.log(
      "Datos: ",
      this.idPersona,
      this.Nombre,
      this.Direccion,
      this.Edad,
      this.Silla,
      this.idVuelo
    );
  }

  modificarPasajero() {
    const persona = {
      id_persona: this.idPersona,
      nombre: this.Nombre,
      direccion: this.Direccion,
      edad: this.Edad,
      numero_asiento: this.Silla,
      vuelo_id_vuelo: this.idVuelo
    };
    this.VueloService.updatePasajero(persona).subscribe(newPersona => {});
  }

  ngOnInit(): void {}
}
