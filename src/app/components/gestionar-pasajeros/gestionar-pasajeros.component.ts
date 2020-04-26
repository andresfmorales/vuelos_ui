import { Component, OnInit } from "@angular/core";
import { VueloService } from "src/app/services/services";
import { pipe } from "rxjs";

@Component({
  selector: "app-gestionar-pasajeros",
  templateUrl: "./gestionar-pasajeros.component.html",
  styleUrls: ["./gestionar-pasajeros.component.css"]
})
export class GestionarPasajerosComponent implements OnInit {
  idPersona: number;
  Nombre: string;
  Direccion: string;
  Edad: number;
  Silla: number;
  idVuelo: number;

  constructor(private VueloService: VueloService) {}

  createPasajero() {
    const persona = {
      id_persona: this.idPersona,
      nombre: this.Nombre,
      direccion: this.Direccion,
      edad: this.Edad,
      numero_asiento: this.Silla,
      vuelo_id_vuelo: this.idVuelo
    };
    this.VueloService.createPasajero(persona).subscribe(newPersona => {
      console.log(newPersona);
    });
  }

  ngOnInit(): void {}
}
