import { Agenda, Direcciones } from './domain/Agenda';

class AgendarUsuario {
  nuevoUsuario: Agenda;
  constructor(nuevoUsuario: Agenda) {
    this.nuevoUsuario = nuevoUsuario;
  }

  muestraNombre() {
    return this.nuevoUsuario.nombre;
  }

  muestraTelefono(): number {
    return this.nuevoUsuario.telefono;
  }
  muestraDirecciones(): Direcciones[] {
    return this.nuevoUsuario.direcciones;
  }
}

const nuevaAgenda = new AgendarUsuario({
  nombre: 'Albert',
  telefono: 2332323131,
  direcciones: [
    {
      calle: 'avda. pelayo',
      numero: 45,
      ciudad: 'barcelona',
      pais: 'españa'
    }
  ],
muestraNombre()
  muestraTelefono()
  muestraDirecciones()
});

const direc = nuevaAgenda.muestraDirecciones();
console.log(direc);
