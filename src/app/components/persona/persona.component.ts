import { Component, OnInit, Input } from '@angular/core';

import { Persona } from '../../models/persona.model'

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  @Input() persona: Persona = {  //Ponemos los valores nulls con los que se inicializara
    persona: '',
    fecha: '',
    dni: '',
    tel: '',
    fieb: '',
    tos: '',
    respiracion: '',
    malestar: '',
    vacunas: []
  }
  
  ngOnInit(): void {
  }

}
