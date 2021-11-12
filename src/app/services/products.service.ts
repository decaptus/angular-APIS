import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product, CreateProductDTO, UpdateProductDTO } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products';

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  create(dto: CreateProductDTO) {                     //Es curioso como enviamos un CreateProductDTO
    return this.http.post<Product>(this.apiUrl, dto); //Pero recivimos un product normal
  }

  update(id: string, dto: UpdateProductDTO) { //Aqui tenemos que enviar tambien el id del producto
    return this.http.put<Product>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: string) {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}
