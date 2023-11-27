"use strict";
class AgendaClass {
    constructor(nombre, telefono, direcciones) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.direcciones = direcciones;
    }
    muestraNombre() {
        return this.nombre;
    }
    muestraTelefono() {
        return this.telefono;
    }
    muestraDirecciones() {
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
//# sourceMappingURL=indexAlan.js.map