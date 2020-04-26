export interface Vuelo {
  idVuelo: number;
  pasajeros: number;
  ciudad: string;
  fecha_salida: any;
  fecha_llegada: any;
  aerolinea: string;
}

export interface Persona {
  id_persona: number;
  nombre: string;
  direccion: string;
  edad: number;
  numero_asiento: number;
  vuelo_id_vuelo: number;
}
