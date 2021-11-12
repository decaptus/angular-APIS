import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product = {  //Ponemos los valores nulls con los que se inicializara
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
      name: ''
    },
    description: ''
  };
  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showProduct = new EventEmitter<string>(); //Aqui es cunda enviamos la data que hemos definido abajo

  constructor() { }

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }

  onShowDetails() {
    this.showProduct.emit(this.product.id); //Emitiremso el id del producto que hayamso clicado en Stirng
                                            //Una vez hecho esto, ya podemos leer el output de arriba
  }

}
