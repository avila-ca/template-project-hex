
export type Direcciones = {
    calle: string
    numero: number
    ciudad: string
    pais: string
  }
  
export  interface Agenda {
    nombre: string
    telefono: number
    direcciones: Direcciones[]
    muestraNombre: () => string
    muestraTelefono: () => number
    muestraDirecciones: () => Direcciones[]
  }


// interface Agenda{
//     nombre:string,
//     telefono:number,
//     direccione:[{
//         calle: string,
//         numero: number,
//         ciudad: string,
//         pais: string
//     }],
//     muestraNombre():string,
//     muestraTelefono():number,
//     muestraDirecciones():[{}],
// }