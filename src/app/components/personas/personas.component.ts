import { Component, OnInit } from '@angular/core';

import { Persona, UpdatePersonaDTO } from '../../models/persona.model'
import { PersonasService } from '../../services/personas.service'


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(
    private personasService: PersonasService
  ) { }

  id: string = "";
  personaedit: string = "";
  fechaedit: string = "";
  dniedit: string = "";
  teledit: string = "";
  fiebedit: string = "";
  tosedit: string = "";
  respiracionedit: string = "";
  malestaredit: string = "";


  ngOnInit(): void {
    this.personasService.getAllProducts()
    .subscribe(data => {
      this.personas = data;
    });
  }

  updatePersona() {
    const changes: UpdatePersonaDTO = {
      persona: this.personaedit,
      fecha: this.fechaedit,
      dni: this.dniedit,
      tel: this.teledit,
      fieb: this.fiebedit,
      tos: this.tosedit,
      respiracion: this.respiracionedit,
      malestar: this.malestaredit
    }
    this.personasService.update(this.id, changes)
    .subscribe(data => {

    });
  }

}
