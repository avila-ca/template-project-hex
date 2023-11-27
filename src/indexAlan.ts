type Direcciones = {
  calle: string;
  numero: number;
  ciudad: string;
  pais: string;
};

interface Agenda {
  nombre: string;
  telefono: number;
  direcciones: Direcciones[];
  muestraNombre: () => string;
  muestraTelefono: () => number;
  muestraDirecciones: () => Direcciones[];
}

class AgendaClass implements Agenda {
  nombre: string;
  telefono: number;
  direcciones: Direcciones[];

  constructor(nombre: string, telefono: number, direcciones: Direcciones[]) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.direcciones = direcciones;
  }

  muestraNombre(): string {
    return this.nombre;
  }
  muestraTelefono(): number {
    return this.telefono;
  }
  muestraDirecciones(): Direcciones[] {
    return this.direcciones;
  }
}

const AgendaDeAlan = new AgendaClass('Alan', 473628376, [
  { calle: 'C/ Roca', numero: 4, ciudad: 'Barcelona', pais: 'España' },
  { calle: 'C/ Pascual', numero: 5, ciudad: 'Barcelona', pais: 'España' }
]);

const AgendaDeMauricio = new AgendaClass('Mauricio', 758473857, [
  { calle: 'C/ Genís', numero: 4, ciudad: 'Barcelona', pais: 'España' },
  { calle: 'C/ Rodrigo', numero: 5, ciudad: 'Barcelona', pais: 'España' }
]);

console.log(AgendaDeAlan);

console.log(AgendaDeMauricio);
