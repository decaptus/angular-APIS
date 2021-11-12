import { Component, OnInit } from '@angular/core';

import { Persona } from '../../models/persona.model'
import { PersonasService } from '../../services/personas.service'


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(
    private productsService: PersonasService
  ) { }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data => {
      this.personas = data;
    });
  }

}
