export interface Vuelo {
  idVuelo: bigint;
  pasajeros: bigint;
  ciudad: string;
  fecha_salida: string;
  fecha_llegada: string;
  aerolinea: string;
}

export interface Persona {
  id_Puelo: any;
  nombre: any;
  direccion: any;
  edad: any;
  numero_asiento: any;
  vuelo_id_vuelo: any;
}
