import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Vuelo, Persona } from "../interface/Vuelo-Persona";

@Injectable({
  providedIn: "root"
})
export class VueloService {
  private api = "vuelos/listar";

  private apiListaPersonas = "personas/pasajeros";

  private apiBuscarPasajero = "personas/buscarId";

  private apiCrearPasajero = "personas/agregar";

  constructor(private http: HttpClient) {}

  getAllVuelos() {
    const path = `${this.api}`;
    return this.http.get<Vuelo[]>(path);
  }

  getAllPasajeros(id: any) {
    const path = `${this.apiListaPersonas}/${id}`;
    return this.http.get<Persona[]>(path);
  }

  createPasajero(task: Persona) {
    const path = `${this.apiCrearPasajero}`;
    return this.http.post(path, task);
  }

  getPasajeroById(id: any) {
    const path = `${this.apiBuscarPasajero}/${id}`;
    return this.http.get<Persona>(path);
  }
}
