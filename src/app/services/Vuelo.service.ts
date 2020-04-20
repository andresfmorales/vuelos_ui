import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Vuelo } from '../interface/Vuelo';

@Injectable({
    providedIn: "root"
})
export class VueloService{
    
    private api = 'vuelos/listar';
    
    constructor(
        private http:HttpClient
    ){ }

    
    getAllVuelos() {
        const path = `${this.api}`;
        return this.http.get<Vuelo[]>(path);
      } 
}


    
  
    