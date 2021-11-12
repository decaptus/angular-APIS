import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Persona } from './../models/persona.model'

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private apiUrl = 'http://localhost:4000/personas';

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Persona[]>(this.apiUrl);
  }

  getProduct(id: string) {
    return this.http.get<Persona>(`${this.apiUrl}/${id}`);
  }

  /*update(id: string, dto: UpdateProductDTO) { //Aqui tenemos que enviar tambien el id del producto
    return this.http.put<Persona>(`${this.apiUrl}/${id}`, dto);
  }*/
}
