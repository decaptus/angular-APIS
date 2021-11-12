export interface Persona {
  persona?: string;
  fecha?: string;
  dni?: string;
  tel?: string;
  fieb?: string;
  tos?: string;
  respiracion?: string;
  malestar?: string;
  vacunas?: string[]
}

export interface CreatePersonaDTO extends Omit<Persona, 'id' > {
}

export interface UpdatePersonaDTO extends Partial<CreatePersonaDTO> {
}
