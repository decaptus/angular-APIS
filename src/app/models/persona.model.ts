export interface Persona {
  persona: string;
  fecha: string;
  dni: string;
  tel: string;
  fieb: string;
  tos: string;
  respiracion: string;
  malestar: string;
  vacunas: string[]
}

/*export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {
  categoryId: number;
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> {*/
