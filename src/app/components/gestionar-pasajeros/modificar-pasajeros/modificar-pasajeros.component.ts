import { Component, OnInit } from "@angular/core";
import { VueloService } from "src/app/services/services";

@Component({
  selector: "app-modificar-pasajeros",
  templateUrl: "./modificar-pasajeros.component.html",
  styleUrls: ["./modificar-pasajeros.component.css"]
})
export class ModificarPasajerosComponent implements OnInit {
  idPersona: number;
  Nombre: string;
  Direccion: string;
  Edad: number;
  Silla: number;
  idVuelo: number;
  constructor(private VueloService: VueloService) {}

  modificarPasajero() {
    const persona = {
      id_persona: this.idPersona,
      nombre: this.Nombre,
      direccion: this.Direccion,
      edad: this.Edad,
      numero_asiento: this.Silla,
      vuelo_id_vuelo: this.idVuelo
    };
    this.VueloService.createPasajero(persona).subscribe(newPersona => {});
  }

  ngOnInit(): void {}
}
